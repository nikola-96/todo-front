export default {
  setTodos(state, todos) {
    state.todos = todos;
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  getTodoForEdit(state, todo) {
    state.todo = todo;
  },
  editTodo(state, todo) {
    state.todos = state.todos.map((singleTodo) =>
      singleTodo.id === todo.id ? (singleTodo = todo) : singleTodo
    );
  },
  addNewTodo(state, todo) {
    state.todos = [...state.todos, todo];
  },
  searchByPriority(state, priority) {
    state.todosPriority = state.todos.filter(
      (todo) => todo.priority === priority
    );
  },
};
