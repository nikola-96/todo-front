<template>
  <div class="remove-item" @click="()=>handleDelete(todo.id)">&times;</div>
</template>
<script>
export default {
  name: "DeleteComponent",
  props: {
    todo: {
      type: Object,
      reqired: true,
    },
    handleDelete: {
      type: Function,
      reqired: true,
    },
  },
};
</script>

<style lang="scss">
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
</style>