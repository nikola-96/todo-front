<template>
  <button
    class="button btn btn-secondary"
    @click="()=>this.$router.push({path: this.getRouteName()})"
  >{{getRouteName()}}</button>
</template>

<script>
export default {
  name: "ButtonAuthComponent",
  props: {
    currentRoute: {
      type: String,
      required: true,
    },
  },
  methods: {
    getRouteName() {
      if (this.currentRoute === "Login") {
        return "Register";
      } else if (this.currentRoute === "Register") {
        return "Login";
      }
    },
  },
};
</script>