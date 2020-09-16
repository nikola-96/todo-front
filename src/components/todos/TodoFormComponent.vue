<template>
  <div class="form-wraper">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="todo.title" class="form-control" type="text" required />
      <label>Description:</label>
      <input v-model="todo.description" class="form-control" type="text" />
      <label>Priority:</label>
      <select class="form-control" v-model="todo.priority" required>
        <option
          v-for="(option, index) in priority"
          :key="index"
          :value="option.value"
        >{{option.text}}</option>
      </select>
      <label>Is complited:</label>
      <input class="checkbox" type="checkbox" id="checkbox" v-model="todo.complited" />
      <label for="checkbox">{{ todo.complited ? 'true' : 'false' }}</label>
      <button class="button btn btn-secondary" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "TodoFormComponent",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: false,
    },
    postTodo: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      priority: [
        { text: "Low", value: "low" },
        { text: "Medium", value: "medium" },
        { text: "High", value: "high" },
      ],
    };
  },
  methods: {
    async handleSubmit() {
      if (this.updateTodo) {
        await this.updateTodo(this.todo);
        this.$router.push("/todos");
      } //double check
      if (this.postTodo) {
        await this.postTodo(this.todo);
        this.$router.push("/todos");
      }
    },
  },
};
</script>
<style lang="scss">
.form-wraper {
  margin-top: 150px;
}
.form-control {
  margin: 5px 0 5px 0;
}
.button {
  margin: 5px 0 0 80px;
}
.checkbox {
  margin-left: 10px;
}
</style>