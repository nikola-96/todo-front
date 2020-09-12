<template>
<div className="sign-up">
    <h2 className="title">Please register</h2>
        <form class="sign-up-form" @submit.prevent="handleSubmit">
          <div class="gruop" >
            <input
            class="form-input"
            id="name"
            name="name"
            type="text"
            v-model="user.name"
            required >
          </div>
          <div class="gruop" >
            <input
            class="form-input"
            id="surname"
            name="surname"
            type="text"
            v-model="user.surname"
            required >
          </div>
          <div class="gruop" >
            <input
            class="form-input"
            id="email"
            name="email"
            type="text"
            v-model="user.email"
            required >
          </div>
          <div class="gruop" >
            <input
            class="form-input"
            id="password"
            name="password"
            type="text"
            v-model="user.surname"
            required >
          </div>
          <div class="gruop" >
            <input
            class="form-input"
            id="password_confirmed"
            name="password_confirmed"
            type="text"
            v-model="user.surname"
            required >
          </div>
        <button type="submit">Submit</button>
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
      handleRegister: {
          type: Function,
          required: true
      }
  },
    methods: {
        handleSubmit(){
            this.handleRegister(this.user);
        }
    }
}
</script>

<style scoped>
.sign-up-form{
  margin: 50px 0 0 0;
}
.form-input{
  width: 250px;
  margin: 10px 0 0 0;
}
  
</style>