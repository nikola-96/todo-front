export default {
    setTodos(state, todos) {
        state.todos = todos;
    },
    deleteTodo(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id);
    }
}