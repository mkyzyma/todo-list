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
  }

  async find() {
    return this.todoList.toPojo();
  }

  async get(id) {
    return this.todoList.byId(id);
  }

  async create({ title }) {
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
