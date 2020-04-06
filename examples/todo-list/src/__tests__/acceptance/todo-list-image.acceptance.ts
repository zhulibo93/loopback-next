// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Client, createRestAppClient, expect, toJSON} from '@loopback/testlab';
import {TodoListApplication} from '../../application';
import {TodoList, TodoListImage} from '../../models/';
import {TodoListImageRepository, TodoListRepository} from '../../repositories/';
import {
  givenRunningApplicationWithCustomConfiguration,
  givenTodoListImage,
  givenTodoListInstance,
  givenTodoListRepositories,
} from '../helpers';

describe('TodoListApplication', () => {
  let app: TodoListApplication;
  let client: Client;
  let todoListRepo: TodoListRepository;
  let todoListImageRepo: TodoListImageRepository;

  let persistedTodoList: TodoList;

  before(async () => {
    app = await givenRunningApplicationWithCustomConfiguration();
  });
  after(() => app.stop());

  before(async () => {
    ({todoListRepo, todoListImageRepo} = await givenTodoListRepositories(app));
  });
  before(() => {
    client = createRestAppClient(app);
  });

  beforeEach(async () => {
    await todoListImageRepo.deleteAll();
    await todoListRepo.deleteAll();
  });

  beforeEach(async () => {
    persistedTodoList = await givenTodoListInstance(todoListRepo);
  });

  it('creates image for a todoList', async () => {
    const todoListImage = givenTodoListImage();
    delete todoListImage.todoListId;
    const response = await client
      .post(`/todo-lists/${persistedTodoList.id}/image`)
      .send(todoListImage)
      .expect(200);

    /*
     * TypeScript 3.9.x reports an error for
     * `expect(toJSON(created)).to.deepEqual({id: response.body.id, ...expected});`
     * with the following reasoning:
     * 1. The inferred type of `expected` has an `id` (non-optional) property.
     * 2. The spread assignment has overriding property `id` from the 1st and 2nd
     * argument.
     * 3. The TS compiler think the 1st `id` will be ALWAYS overridden and
     * it is probably a bug in the code.
     * 4. In our case, `expected.id` is not defined when it's instantiated from
     * `TodoListImage` class without `create`. Please note the
     * `TodoListImage.prototype.id` is NOT marked as optional.
     */
    const expected: Pick<TodoListImage, 'todoListId' | 'value'> = {
      ...todoListImage,
      todoListId: persistedTodoList.id,
    };
    expect(response.body).to.containEql(expected);

    const created = await todoListImageRepo.findById(response.body.id);

    expect(toJSON(created)).to.deepEqual({id: response.body.id, ...expected});
  });

  it('finds images for a todoList', async () => {
    const todoListImage = await givenTodoListImageInstanceOfTodoList(
      persistedTodoList.id,
      {
        value: 'A picture of a green checkmark',
      },
    );

    const response = await client
      .get(`/todo-lists/${persistedTodoList.id}/image`)
      .send()
      .expect(200);

    expect(response.body).to.containDeep(todoListImage);
  });

  /*
   ============================================================================
   TEST HELPERS
   These functions help simplify setup of your test fixtures so that your tests
   can:
   - operate on a "clean" environment each time (a fresh in-memory database)
   - avoid polluting the test with large quantities of setup logic to keep
   them clear and easy to read
   - keep them DRY (who wants to write the same stuff over and over?)
   ============================================================================
   */

  async function givenTodoListImageInstanceOfTodoList(
    id: typeof TodoList.prototype.id,
    todoListImage?: Partial<TodoListImage>,
  ) {
    const data = givenTodoListImage(todoListImage);
    delete data.todoListId;
    return todoListRepo.image(id).create(data);
  }
});
