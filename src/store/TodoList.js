import { observable, action, reaction } from 'mobx';
import { Todo } from './Todo';
import { uuid } from '../utils';

class TodoList {
  @observable todos = [];

  constructor() {
    this.change();
  }

  @action
  add(title) {
    const todo = new Todo(uuid(), title);
    this.todos.push(todo);
  }

  @action
  remove(id) {
    const index = this.todos.findIndex((t) => t.id === id);
    this.todos.splice(index, 1);
  }

  change() {
    reaction(
      () => this.todos.length,
      (todos) => {
        console.log('Todos changed', todos);
      },
    );
  }
}

export { TodoList };
