import todoService from '../services/todos/TodoSevice';

export default {
    async getTodos({ commit }) {
        try {
            const reponse = await todoService.fetchTodos();
            commit('setTodos', reponse);
        } catch (error) {
            console.log(error);
        }
    },
    async deleteTodo({commit}, id){
        try {
            await todoService.startDeleteTodo(id);
            commit('deleteTodo', id)
        } catch (error) {
            console.log(error)
        }
    } 
}
