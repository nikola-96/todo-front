<template>
  <div>
    <input
      class="checkbox"
      type="checkbox"
      id="checkbox"
      v-model="todo.complited"
      @click="handleUpdate"
    />
  </div>
</template>
<script>
export default {
  name: "CheckboxComponent",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleUpdate() {
      this.todo.complited = !this.todo.complited;
      this.updateTodo(this.todo);
    },
  },
};
</script>