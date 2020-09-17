import HTTP from "../base/BaseService";

class TodoService {
  async fetchTodos() {
    const response = await HTTP.get("/todo");

    return response.data;
  }
  async startDeleteTodo(id) {
    await HTTP.delete(`/todo/${id}`);
  }
  async fetchSingleTodo(id) {
    const response = await HTTP.get(`/todo/${id}`);

    return response.data;
  }
  async asyncUpdateTodo(todo) {
    await HTTP.put(`/todo/${todo.id}`, todo);
  }
  async asyncPostTodo(todo) {
    await HTTP.post("/todo", todo);
  }
  async fetchSearchedTodos(priority) {
    const response = await HTTP.get(`/todo?priority=${priority}`);
    return response.data;
  }
}
const todoService = new TodoService();

export default todoService;
