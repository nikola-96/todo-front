<template>
  <div class="item-wraper">
    <Header :handleSearchByPriority="handleSearchByPriority" />
    <div class="todo-item" v-for="todo in todos" :key="todo.id">
      <CheckboxComponent :todo="todo" :updateTodo="updateTodo" />
      <SingleTodo :todo="todo" :editTodo="editTodo" />
      <DeleteCompoennt :todo="todo" :deleteTodo="deleteTodo" />
    </div>
    <button class="button-add btn btn-light" @click="()=>this.$router.push('/todo/create')">Add todo</button>
  </div>
</template>

<script>
import SingleTodo from "../../components/todos/SIngleTodo";
import DeleteCompoennt from "../../components/todos/DeleteComponent";
import CheckboxComponent from "../../components/todos/CheckboxComponent";
import Header from "../layouts/Header";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todos",
  components: {
    SingleTodo,
    DeleteCompoennt,
    CheckboxComponent,
    Header,
  },
  methods: {
    ...mapActions(["getTodos", "deleteTodo", "updateTodo", "searchByPriority"]),
    editTodo(id) {
      this.$router.push(`/todo/edit/${id}`);
    },
    handleSearchByPriority(priority) {
      this.searchByPriority(priority);
      if (priority === "all") {
        this.todos = [...this.getAllTodosFromState];
      } else {
        this.todos = [...this.getTodosByPriority];
      }
    },
  },
  data() {
    return {
      todos: [],
    };
  },
  async created() {
    await this.getTodos();
    this.todos = [...this.getAllTodosFromState];
  },
  computed: {
    ...mapGetters(["getAllTodosFromState", "getTodosByPriority"]),
  },
};
</script>
<style lang="scss">
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button-add {
  margin-left: 43%;
}
</style>