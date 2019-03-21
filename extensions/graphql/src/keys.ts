// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/graphql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {BindingKey} from '@loopback/context';
import {GraphQLServer} from './graphql-server';

export namespace GraphQLBindings {
  export const GRAPHQL_SERVER = BindingKey.create<GraphQLServer>(
    'servers.GraphQLServer',
  );

  export const RESOLVERS = 'resolvers';
}

export namespace GraphQLTags {
  export const GRAPHQL = 'graphql';
}
