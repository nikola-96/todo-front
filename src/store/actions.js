import todoService from '../services/todos/TodoSevice';

export default {
    async getTodos({ commit }) {
        const reponse = await todoService.fetchTodos();
        commit('setTodos', reponse);
    },
}
