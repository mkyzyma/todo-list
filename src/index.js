import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio';
import express from '@feathersjs/express';

import { TodoService } from './service/TodoService';
import { TodoSummaryService } from './service/TodoSummaryService';

import { TodoList } from './store/TodoList';

const app = express(feathers());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.configure(express.rest());

app.configure(socketio());

const todoList = new TodoList();

app.use('/todos', new TodoService(todoList));
app.use('/summary', new TodoSummaryService(todoList));

app.use(express.errorHandler());

app.on('connection', (connection) => app.channel('everybody').join(connection));

app.publish(() => app.channel('everybody'));

app.listen(3030).on('listening', () => {
  console.log('Listening on localhost:3030');
});

app.service('todos').create({ title: 'Super mega puper task!' });
