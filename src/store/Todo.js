import { observable } from 'mobx';

class Todo {
  id;

  @observable title = '';

  @observable completed = false;

  constructor(id, title) {
    this.id = id;
    this.title = title;
  }

  toggle() {
    this.completed = !this.completed;
  }

  setTitle(title) {
    this.title = title;
  }
}

export { Todo };
