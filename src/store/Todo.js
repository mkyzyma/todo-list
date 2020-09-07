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
    return this;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  toPojo() {
    return {
      id: this.id,
      title: this.title,
      completed: this.completed,
    };
  }
}

export { Todo };
