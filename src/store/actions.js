import todoService from "../services/todos/TodoService";

export default {
  async getTodos({ commit }) {
    try {
      const reponse = await todoService.fetchTodos();
      commit("setTodos", reponse);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTodo({ commit }, id) {
    try {
      await todoService.startDeleteTodo(id);
      commit("deleteTodo", id);
    } catch (error) {
      console.log(error);
    }
  },
  async getTodoForEdit({ commit }, id) {
    try {
      const response = await todoService.fetchSingleTodo(id);
      commit("getTodoForEdit", response);
    } catch (error) {
      console.log(error);
    }
  },
  async updateTodo({ commit }, todo) {
    try {
      await todoService.asyncUpdateTodo(todo);
      commit("editTodo", todo);
    } catch (error) {
      console.log(error);
    }
  },
  async postTodo({ commit }, todo) {
    try {
      await todoService.asyncPostTodo(todo);
      commit("addNewTodo", todo);
    } catch (error) {
      console.log(error);
    }
  },
  async searchTodo({ commit }, term) {
    try {
      const response = await todoService.fetchSearchedTodos(term);
      commit("setTodos", response);
    } catch (error) {
      console.log(error);
    }
  },
  searchByPriority({ commit }, priority) {
    commit("searchByPriority", priority);
  },
};
