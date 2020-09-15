<template>
  <div>
    <TodoFormComponent :todo="todo" :postTodo="postTodo" />
  </div>
</template>

<script>
import TodoFormComponent from "../../components/todos/TodoFormComponent";
import { mapActions } from "vuex";

export default {
  name: "TodoEdit",
  components: {
    TodoFormComponent,
  },
  methods: {
    ...mapActions(["postTodo"]),
  },
  data() {
    return {
      todo: {
        complited: false,
      },
    };
  },
};
</script>