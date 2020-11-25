<template>
  <div>
    <TopVar View="Login" v-bind:ShowImg="true"/>
    <template v-if="user == null">
      <button @click="login()">login with google</button>
    </template>
    <template v-else>
      
      <div id="info-user">
        
        <img id="user-photo" :src="user.photoURL" :alt="user.displayName">
        <h1>{{user.displayName}}</h1>

      </div>
      <button> chat </button>

      <button @click="logout()">log out</button>
    </template>

  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import {mapState} from 'vuex';
import TopVar from '@/components/TopVar.vue';


export default {
  name: 'Login',
  computed:{
    ...mapState(['user'])
  },
  components:{
      TopVar,
    
  },
  methods:{
    login(){
      let provider = new firebase.auth.GoogleAuthProvider()

      firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log('User info: ' , result.user);
      })
      .catch(error => { 
        console.log(error.code)
      })
    },
    logout(){
      firebase
      .auth()
      .signOut()
      .then(()=> {
       
        console.log('User has loged out')
      })
      .catch(error => {
        console.log(error.code)
      })
    }
  }
  
}
</script>

<style>
#info-user{
  margin-top: 25px;
}
#user-photo{
    width: 100px;
    border-radius: 50%;
}
</style>