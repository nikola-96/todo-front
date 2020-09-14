<template>
<div className="sign-up">
    <h2 className="title">Please login</h2>
        <form class="sign-up-form" @submit.prevent="handleSubmit">
          <div class="gruop" >
            <input
            class="form-input"
            id="email"
            name="email"
            type="email"
            v-model="user.email"
            required
            placeholder="Enter your email:">
          </div>
          <div class="gruop" >
            <input
            class="form-input"
            id="password"
            name="password"
            type="password"
            v-model="user.password"
            required
            placeholder="Enter your password:" >
          </div>
        <button class="btn-submit btn btn-secondary" type="submit">Submit</button>
      </form>
</div>
</template>

<script>

export default {
  name: 'RegisterForm',
  props:{
      user:{
          type: Object,
          required: true
      },
      handleLogin:{
          type: Function,
          required: true
      }
  },
    methods: {
        handleSubmit(){
            this.handleLogin(this.user)
        }
    }
}
</script>

<style scoped>
.sign-up-form{
  margin: 50px 0 0 0;
}
.form-input{
  width: 300px;
  margin: 10px 0 0 0;
}
.btn-submit{
  margin: 15px 0 0 0;
}
  
</style>