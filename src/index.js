import hello from './hello';
import { Todo } from './store/todo';

const todo = new Todo('Miha');

console.log(todo.text);
