// IMPORTANT
// This snapshot file is auto-generated, but designed for humans.
// It should be checked into source control and tracked carefully.
// Re-generate by setting UPDATE_SNAPSHOTS=1 and running tests.
// Make sure to inspect the changes in the snapshots below.
// Do not ignore changes!

'use strict';

exports[`schema to model generates models for customer 1`] = `
[{"description":"Name","name":"Name","className":"Name","fileName":"name.model.ts","properties":[],"imports":[],"import":"import {Name} from './name.model';","declaration":"string","signature":"Name"},{"description":"profileId","name":"profileId","className":"ProfileId","fileName":"profile-id.model.ts","properties":[],"imports":[],"import":"import {ProfileId} from './profile-id.model';","declaration":"string","signature":"ProfileId"},{"description":"AddressList","name":"Address[]","className":"AddressList","fileName":"address-list.model.ts","properties":[],"imports":["import {Address} from './address.model';"],"import":"import {AddressList} from './address-list.model';","declaration":"Address[]","signature":"AddressList","itemType":{"description":"Address","name":"Address","className":"Address","fileName":"address.model.ts","properties":[{"name":"street","signature":"street?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"},{"name":"city","signature":"city?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"},{"name":"state","signature":"state?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"},{"name":"zipCode","signature":"zipCode?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"}],"imports":[],"import":"import {Address} from './address.model';","kind":"class","declaration":"{\\n  street?: string;\\n  city?: string;\\n  state?: string;\\n  zipCode?: string;\\n}","signature":"Address"}},{"description":"Address","name":"Address","className":"Address","fileName":"address.model.ts","properties":[{"name":"street","signature":"street?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"},{"name":"city","signature":"city?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"},{"name":"state","signature":"state?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"},{"name":"zipCode","signature":"zipCode?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"}],"imports":[],"import":"import {Address} from './address.model';","kind":"class","declaration":"{\\n  street?: string;\\n  city?: string;\\n  state?: string;\\n  zipCode?: string;\\n}","signature":"Address"},{"description":"Customer","name":"Customer","className":"Customer","fileName":"customer.model.ts","properties":[{"name":"id","signature":"id: number;","decoration":"@property({required: true, jsonSchema: {\\n  type: 'integer',\\n  format: 'int64',\\n}})"},{"name":"first-name","signature":"'first-name'?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"},{"name":"last-name","signature":"'last-name'?: Name;","decoration":"@property({jsonSchema: {\\n  $ref: '#/components/schemas/Name',\\n}})"},{"name":"profiles","signature":"profiles?: ProfileId[];","decoration":"@property.array(String, {jsonSchema: {\\n  type: 'array',\\n  items: {\\n    $ref: '#/components/schemas/profileId',\\n  },\\n}})"},{"name":"emails","signature":"emails?: string[];","decoration":"@property.array(String, {jsonSchema: {\\n  type: 'array',\\n  items: {\\n    type: 'string',\\n  },\\n}})"},{"name":"addresses","signature":"addresses?: AddressList;","decoration":"@property.array(Address, {jsonSchema: {\\n  $ref: '#/components/schemas/AddressList',\\n}})"},{"name":"us-office","signature":"'us-office'?: Address;","decoration":"@property({jsonSchema: {\\n  $ref: '#/components/schemas/USAddress',\\n}})"}],"imports":["import {Name} from './name.model';","import {ProfileId} from './profile-id.model';","import {Address} from './address.model';","import {AddressList} from './address-list.model';"],"import":"import {Customer} from './customer.model';","kind":"class","declaration":"{\\n  id: number;\\n  'first-name'?: string;\\n  'last-name'?: Name;\\n  profiles?: ProfileId[];\\n  emails?: string[];\\n  addresses?: AddressList;\\n  'us-office'?: Address;\\n}","signature":"Customer"}]
`;


exports[`schema to model generates models for petstore 1`] = `
[{"description":"Pet","name":"Pet","className":"Pet","fileName":"pet.model.ts","properties":[],"imports":["import {NewPet} from './new-pet.model';"],"import":"import {Pet} from './pet.model';","members":[{"description":"NewPet","name":"NewPet","className":"NewPet","fileName":"new-pet.model.ts","properties":[{"name":"name","signature":"name: string;","decoration":"@property({required: true, jsonSchema: {\\n  type: 'string',\\n}})"},{"name":"tag","signature":"tag?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"}],"imports":[],"import":"import {NewPet} from './new-pet.model';","kind":"class","declaration":"{\\n  name: string;\\n  tag?: string;\\n}","signature":"NewPet"},{"imports":[],"declaration":"{\\n  id: number;\\n}","properties":[{"name":"id","signature":"id: number;","decoration":"@property({required: true, jsonSchema: {\\n  type: 'integer',\\n  format: 'int64',\\n}})"}],"signature":"{\\n  id: number;\\n}"}],"declaration":"NewPet & {\\n  id: number;\\n}","signature":"Pet"},{"description":"NewPet","name":"NewPet","className":"NewPet","fileName":"new-pet.model.ts","properties":[{"name":"name","signature":"name: string;","decoration":"@property({required: true, jsonSchema: {\\n  type: 'string',\\n}})"},{"name":"tag","signature":"tag?: string;","decoration":"@property({jsonSchema: {\\n  type: 'string',\\n}})"}],"imports":[],"import":"import {NewPet} from './new-pet.model';","kind":"class","declaration":"{\\n  name: string;\\n  tag?: string;\\n}","signature":"NewPet"},{"description":"Error","name":"Error","className":"Error","fileName":"error.model.ts","properties":[{"name":"code","signature":"code: number;","decoration":"@property({required: true, jsonSchema: {\\n  type: 'integer',\\n  format: 'int32',\\n}})"},{"name":"message","signature":"message: string;","decoration":"@property({required: true, jsonSchema: {\\n  type: 'string',\\n}})"}],"imports":[],"import":"import {Error} from './error.model';","kind":"class","declaration":"{\\n  code: number;\\n  message: string;\\n}","signature":"Error"}]
`;


exports[`schema to model generates models for uspto 1`] = `
[{"description":"dataSetList","name":"dataSetList","className":"DataSetList","fileName":"data-set-list.model.ts","properties":[{"name":"total","signature":"total?: number;","decoration":"@property({jsonSchema: {\\n  type: 'integer',\\n}})"},{"name":"apis","signature":"apis?: {\\n  apiKey?: string;\\n  apiVersionNumber?: string;\\n  apiUrl?: string;\\n  apiDocumentationUrl?: string;\\n}[];","decoration":"@property({jsonSchema: {\\n  type: 'array',\\n  items: {\\n    type: 'object',\\n    properties: {\\n      apiKey: {\\n        type: 'string',\\n        description: 'To be used as a dataset parameter value',\\n      },\\n      apiVersionNumber: {\\n        type: 'string',\\n        description: 'To be used as a version parameter value',\\n      },\\n      apiUrl: {\\n        type: 'string',\\n        format: 'uriref',\\n        description: \\"The URL describing the dataset's fields\\",\\n      },\\n      apiDocumentationUrl: {\\n        type: 'string',\\n        format: 'uriref',\\n        description: 'A URL to the API console for each API',\\n      },\\n    },\\n  },\\n}})"}],"imports":[],"import":"import {DataSetList} from './data-set-list.model';","kind":"class","declaration":"{\\n  total?: number;\\n  apis?: {\\n  apiKey?: string;\\n  apiVersionNumber?: string;\\n  apiUrl?: string;\\n  apiDocumentationUrl?: string;\\n}[];\\n}","signature":"DataSetList"}]
`;


exports[`schema to model generates models for uspto with promoted anonymous schemas 1`] = `
[{"description":"dataSetList","name":"dataSetList","className":"DataSetList","fileName":"data-set-list.model.ts","properties":[{"name":"total","signature":"total?: number;","decoration":"@property({jsonSchema: {\\n  type: 'integer',\\n}})"},{"name":"apis","signature":"apis?: {\\n  apiKey?: string;\\n  apiVersionNumber?: string;\\n  apiUrl?: string;\\n  apiDocumentationUrl?: string;\\n}[];","decoration":"@property({jsonSchema: {\\n  type: 'array',\\n  items: {\\n    type: 'object',\\n    properties: {\\n      apiKey: {\\n        type: 'string',\\n        description: 'To be used as a dataset parameter value',\\n      },\\n      apiVersionNumber: {\\n        type: 'string',\\n        description: 'To be used as a version parameter value',\\n      },\\n      apiUrl: {\\n        type: 'string',\\n        format: 'uriref',\\n        description: \\"The URL describing the dataset's fields\\",\\n      },\\n      apiDocumentationUrl: {\\n        type: 'string',\\n        format: 'uriref',\\n        description: 'A URL to the API console for each API',\\n      },\\n    },\\n  },\\n}})"}],"imports":[],"import":"import {DataSetList} from './data-set-list.model';","kind":"class","declaration":"{\\n  total?: number;\\n  apis?: {\\n  apiKey?: string;\\n  apiVersionNumber?: string;\\n  apiUrl?: string;\\n  apiDocumentationUrl?: string;\\n}[];\\n}","signature":"DataSetList"},{"description":"performSearchRequestBody","name":"performSearchRequestBody","className":"PerformSearchRequestBody","fileName":"perform-search-request-body.model.ts","properties":[{"name":"criteria","signature":"criteria: string = '*:*';","decoration":"@property({required: true, jsonSchema: {\\n  description: \\"Uses Lucene Query Syntax in the format of propertyName:value, propertyName:[num1 TO num2] and date range format: propertyName:[yyyyMMdd TO yyyyMMdd]. In the response please see the 'docs' element which has the list of record objects. Each record structure would consist of all the fields and their corresponding values.\\",\\n  type: 'string',\\n  default: '*:*',\\n}})","description":"Uses Lucene Query Syntax in the format of propertyName:value, propertyName:[num1 TO num2] and date range format: propertyName:[yyyyMMdd TO yyyyMMdd]. In the response please see the 'docs' element which has the list of record objects. Each record structure would consist of all the fields and their corresponding values."},{"name":"start","signature":"start?: number = 0;","decoration":"@property({jsonSchema: {\\n  description: 'Starting record number. Default value is 0.',\\n  type: 'integer',\\n  default: 0,\\n}})","description":"Starting record number. Default value is 0."},{"name":"rows","signature":"rows?: number = 100;","decoration":"@property({jsonSchema: {\\n  description: \\"Specify number of rows to be returned. If you run the search with default values, in the response you will see 'numFound' attribute which will tell the number of records available in the dataset.\\",\\n  type: 'integer',\\n  default: 100,\\n}})","description":"Specify number of rows to be returned. If you run the search with default values, in the response you will see 'numFound' attribute which will tell the number of records available in the dataset."}],"imports":[],"import":"import {PerformSearchRequestBody} from './perform-search-request-body.model';","kind":"class","declaration":"{\\n  criteria: string = '*:*';\\n  start?: number = 0;\\n  rows?: number = 100;\\n}","signature":"PerformSearchRequestBody"},{"description":"performSearchResponseBody","name":"{\\n  [additionalProperty: string]: {\\n  \\n};\\n}[]","className":"PerformSearchResponseBody","fileName":"perform-search-response-body.model.ts","properties":[],"imports":[],"import":"import {PerformSearchResponseBody} from './perform-search-response-body.model';","declaration":"{\\n  [additionalProperty: string]: {\\n  \\n};\\n}[]","signature":"PerformSearchResponseBody","itemType":{"imports":[],"declaration":"{\\n  [additionalProperty: string]: {\\n  \\n};\\n}","properties":[],"signature":"{\\n  [additionalProperty: string]: {\\n  \\n};\\n}"}}]
`;
