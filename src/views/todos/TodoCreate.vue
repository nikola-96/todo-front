<template>
  <div>
    <TodoFormComponent :todo="todo" />
  </div>
</template>

<script>
import TodoFormComponent from "../../components/todos/TodoFormComponent";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TodoEdit",
  components: {
    TodoFormComponent,
  },
  methods: {
    ...mapActions(["getTodoForEdit", "updateTodo"]),
  },
  computed: {
    ...mapGetters(["getTodoForEditFromState"]),
  },
  data() {
    return {
      todo: {},
    };
  },
};
</script>