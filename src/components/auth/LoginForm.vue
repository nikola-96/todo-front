<template>
  <div class="sign-up">
    <h2 class="title">Please login</h2>
    <form class="sign-up-form" @submit.prevent="handleSubmit">
      <div class="gruop">
        <input
          class="form-input"
          id="email"
          name="email"
          type="email"
          v-model="user.email"
          required
          placeholder="Enter your email:"
        />
      </div>
      <div class="gruop">
        <input
          class="form-input"
          id="password"
          name="password"
          type="password"
          v-model="user.password"
          required
          placeholder="Enter your password:"
        />
      </div>
      <button class="btn-submit btn btn-secondary" type="submit">Submit</button>
      <ButtonComponent class="btn-register" />
    </form>
  </div>
</template>

<script>
import ButtonComponent from "../todos/ButtonComponent";
export default {
  name: "RegisterForm",
  components: {
    ButtonComponent,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    handleLogin: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      this.handleLogin(this.user);
    },
  },
};
</script>

<style scoped>
.sign-up-form {
  margin: 50px 0 0 0;
}
.form-input {
  width: 300px;
  margin: 10px 0 0 0;
}
.btn-submit {
  margin: 15px 0 0 0;
}
.btn-register {
  margin: 15px 0 0 150px;
}
</style>