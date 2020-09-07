import { observable } from 'mobx';

class Todo {
  @observable text = '';

  @observable completed = false;

  constructor(text) {
    this.text = text;
  }
}

export { Todo };
