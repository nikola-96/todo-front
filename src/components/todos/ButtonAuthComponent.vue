<template>
  <button
    class="button btn btn-secondary"
    @click="()=>this.$router.push({path: this.toRoute})"
  >{{this.toRoute}}</button>
</template>

<script>
export default {
  name: "ButtonAuthComponent",
  props: {
    toRoute: {
      type: String,
      required: true,
    },
  },
};
</script>