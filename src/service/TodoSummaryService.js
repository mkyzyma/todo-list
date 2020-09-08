/**
 *@typedef { import('../store/TodoList').TodoList } TodoList
 * */

export class TodoSummaryService {
  /**
   * @param { TodoList } todoList
   */
  constructor(todoList) {
    this.todoList = todoList;
  }

  async find() {
    return this.todoList.summary();
  }
}
