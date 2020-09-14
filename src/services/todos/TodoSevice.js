import HTTP from '../base/BaseService';

class TodoService {
    async fetchTodos() {
        const response = await HTTP.get("/todo");
        return response.data
    }
    async startDeleteTodo(id){
         await HTTP.delete(`/todo/${id}`)
    }
}
const todoService = new TodoService();

export default todoService;