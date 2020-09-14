<template>
  <div class="">
      <LoginForm :user="user" :handleLogin="handleLogin"/>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue'
import authService from '../../services/auth/AuthService'

export default {
  name: 'Register',
  components: {
      LoginForm
  },
  data(){
      return {
          user: {}
      }
  },
    methods: {
        async handleLogin(user){
            try {
                await authService.login(user);
                this.user = {};
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>
