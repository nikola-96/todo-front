<template>
  <p class="edit" @click="()=>editTodo(todo.id)">Edit</p>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    editTodo: {
      type: Function,
      required: true,
    },
  },
};
</script>