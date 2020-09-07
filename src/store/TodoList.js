import { observable, action, reaction } from 'mobx';
import { Todo } from './Todo';
import { uuid } from '../utils';

class TodoList {
  @observable todos = [];

  constructor() {
    this.change();
  }

  /**
   * @param { string } title
   * @returns { Todo }
   */
  @action
  add(title) {
    const todo = new Todo(uuid(), title);
    this.todos.push(todo);
    return todo;
  }

  /**
   * @param { string } id
   */
  @action
  remove(id) {
    const index = this.todos.findIndex((t) => t.id === id);
    this.todos.splice(index, 1);
  }

  @action
  toggle(id) {
    return this.byId(id).toggle();
  }

  @action
  setTitle(id, title) {
    return this.byId(id).setTitle(title);
  }

  byId(id) {
    return this.todos.find((t) => t.id === id);
  }

  change() {
    reaction(
      () => this.todos.length,
      (todos) => {
        console.log('Todos changed', todos);
      },
    );
  }

  toPojo() {
    return this.todos.map((t) => t.toPojo());
  }
}

export { TodoList };
