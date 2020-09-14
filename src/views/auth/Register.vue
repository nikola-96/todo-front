<template>
  <div class="">
      <RegisterForm :user="user" :handleRegister="handleRegister"/>
  </div>
</template>

<script>
import RegisterForm from '@/components/auth/RegisterForm.vue'
import authService from '../../services/auth/AuthService'

export default {
  name: 'Register',
  components: {
    RegisterForm
  },
  data(){
      return {
          user: {}
      }
  },
    methods: {
        async handleRegister(user){
            try {
                await authService.register(user);
                this.user = {};
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>
