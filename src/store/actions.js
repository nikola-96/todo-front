import todoService from '../services/todos/TodoService';

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
    },
    async getTodoForEdit({commit}, id){
        try {
            const response = await todoService.fetchSingleTodo(id);
            commit('getTodoForEdit', response)
        } catch (error) {
            console.log(error)
        }
    },
    async changeTodo({commit}, todo){
        await todoService.changeTodo(todo)
        commit('editTodo', todo)
    }
}
