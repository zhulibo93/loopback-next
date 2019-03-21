// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/graphql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Component} from '@loopback/core';
import {GraphQLServer} from './graphql-server';
import {GraphQLBindings} from './keys';

export class GraphQLComponent implements Component {
  servers = {
    [GraphQLBindings.GRAPHQL_SERVER.key]: GraphQLServer,
  };
}
