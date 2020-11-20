<template>
  <div>
    <template v-if="user == null">
      <button @click="login()">login with google</button>
    </template>
    <template v-else>
      <button> chat </button>
      <button @click="logout()">log out</button>
    </template>

  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: 'Login',
  data(){
        return{
          user: null,

        }
  },
  methods:{
    login(){
      let provider = new firebase.auth.GoogleAuthProvider()

      firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => { 
        console.log(error.code)
      })
    },
    logout(){

    }
  }
  
}
</script>

<style>

</style>