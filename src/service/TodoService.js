import { BadRequest } from '@feathersjs/errors';
import config from 'config';
/**
 *@typedef { import('../store/TodoList').TodoList } TodoList
 *@typedef { import('../store/Todo').Todo } Todo
 */

export class TodoService {
  static NAME = 'todos';

  /**
   *@param { TodoList } todoList;
   */
  constructor(todoList) {
    this.todoList = todoList;
    this.settings = config.get('settings');
  }

  async find({ query }) {
    let todos;

    const { completed } = query;

    if (!completed) {
      todos = this.todoList.all();
    } else {
      todos = this.todoList.find(completed === 'true');
    }

    return todos.map((t) => t.toPojo());
  }

  async get(id) {
    return this.todoList.byId(id);
  }

  async create({ title }) {
    if (title.length > this.settings.max_length) {
      throw new BadRequest(`Длина задачи не должна превышать ${this.settings.max_length} символов`);
    }
    return this.todoList.add(title);
  }

  async patch(id) {
    return this.todoList.toggle(id).toPojo();
  }

  async update(id, { title }) {
    return this.todoList.setTitle(id, title).toPojo();
  }

  async remove(id) {
    this.todoList.remove(id);
  }
}
