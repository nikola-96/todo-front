<template>
  <div class="item-wraper">
    <div class="todo-item" v-for="todo in getAllTodosFromState" :key="todo.id">
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todos",
  components: {
    SingleTodo,
    DeleteCompoennt,
    CheckboxComponent,
  },
  methods: {
    ...mapActions(["getTodos", "deleteTodo", "updateTodo"]),
    editTodo(id) {
      this.$router.push(`/todo/edit/${id}`);
    },
  },
  async created() {
    await this.getTodos();
  },
  computed: {
    ...mapGetters(["getAllTodosFromState"]),
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