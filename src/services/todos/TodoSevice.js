import HTTP from '../base/BaseService';

class TodoService {
    async fetchTodos() {
        const response = await HTTP.get("/todo");
        return response.data
    }
}
const todoService = new TodoService();

export default todoService;