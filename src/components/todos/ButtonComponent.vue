<template>
  <button
    class="button btn btn-secondary"
    @click="()=>this.$router.push({path: this.getRouteName()})"
  >{{getRouteName()}}</button>
</template>

<script>
export default {
  name: "ButtonComponent",
  methods: {
    getRouteName() {
      if (this.$router.currentRoute.name === "Login") {
        return "Register";
      } else if (this.$router.currentRoute.name === "Register") {
        return "Login";
      }
    },
  },
};
</script>