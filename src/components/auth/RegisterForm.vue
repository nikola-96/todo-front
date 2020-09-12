<template>
<div className="sign-up">
    <h2 className="title">Please register</h2>
        <form class="sign-up-form">
          <div class="gruop" >
            <input
            class="form-input"
            name="displayName"
            type="text"
            required >
          </div>
          <div class="gruop" >
            <input
            class="form-input"
            name="displayName"
            type="text"
            required >
          </div>
          <div class="gruop" >
            <input
            class="form-input"
            name="displayName"
            type="text"
            required >
          </div>
          <div class="gruop" >
            <input
            class="form-input"
            name="displayName"
            type="text"
            required >
          </div>
          <div class="gruop" >
            <input
            class="form-input"
            name="displayName"
            type="text"
            required >
          </div>

      </form>
</div>
</template>

<script>

export default {
  name: 'RegisterForm',
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