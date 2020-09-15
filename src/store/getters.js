export default {
  getAllTodosFromState: (state) => state.todos,
  getTodoForEditFromState: (state) => state.todo,
  getTodosByPriority: (state) => state.todosPriority,
};
