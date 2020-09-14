import HTTP from '../base/BaseService';

class TodoService {
    async getAllTodos() {
        const response = await HTTP.get("/todos");
        return response.data
    }
}
const todoService = new TodoService();

export default todoService;