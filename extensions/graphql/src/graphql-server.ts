// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/graphql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {
  config,
  Constructor,
  Context,
  createBindingFromClass,
  filterByTag,
} from '@loopback/context';
import {Server} from '@loopback/core';
import {HttpOptions, HttpServer} from '@loopback/http-server';
import {ApolloServer, ApolloServerExpressConfig} from 'apollo-server-express';
import express from 'express';
import {buildSchema, ResolverInterface} from 'type-graphql';
import {GraphQLBindings, GraphQLTags} from './keys';

/**
 * Options for GraphQL server
 */
export interface GraphQLServerOptions extends HttpOptions {
  graphql?: ApolloServerExpressConfig;
}

/**
 * GraphQL Server
 */
export class GraphQLServer extends Context implements Server {
  public readonly httpServer: HttpServer;
  private _expressApp: express.Application;

  constructor(@config() private options: GraphQLServerOptions = {}) {
    super('graphql-server');
    this._expressApp = express();
    this.httpServer = new HttpServer(this._expressApp, this.options);
  }

  getResolvers(): Constructor<ResolverInterface<object>>[] {
    const view = this.createView(filterByTag(GraphQLTags.GRAPHQL));
    return view.bindings
      .filter(b => b.valueConstructor != null)
      .map(b => b.valueConstructor as Constructor<ResolverInterface<object>>);
  }

  resolver(resolverClass: Constructor<ResolverInterface<object>>) {
    this.add(
      createBindingFromClass(resolverClass, {
        namespace: GraphQLBindings.RESOLVERS,
      }).tag(GraphQLTags.GRAPHQL),
    );
  }

  async start() {
    const resolverClasses = this.getResolvers();
    // build TypeGraphQL executable schema
    const schema = await buildSchema({
      resolvers: resolverClasses,
      // automatically create `schema.gql` file with schema definition in current folder
      // emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    });

    const serverConfig = {
      // enable GraphQL Playground
      playground: true,
      ...this.options.graphql,
      schema,
    };
    // Create GraphQL server
    const graphQLServer = new ApolloServer(serverConfig);

    graphQLServer.applyMiddleware({app: this._expressApp});

    await this.httpServer.start();
  }

  async stop() {
    await this.httpServer.stop();
  }

  get listening() {
    return this.httpServer && this.httpServer.listening;
  }
}
