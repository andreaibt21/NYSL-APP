<template>
  <div>
    <TopVar View="Login" v-bind:ShowImg="true"/>
    <template v-if="user == null">
      <div id="container">
        <img src="../assets/user.svg" alt="user-img" id="no-user">

        <button @click="login()">Login with Google</button>
      </div>
    </template>
    <template v-else>
      
      <div id="info-user">
        
        <img id="user-photo" :src="user.photoURL" :alt="user.displayName">
        <h1>{{user.displayName}}</h1>
        <h2>Welcome to our app! <br> Now you can have access to the chatrooms displayed on the <router-link to="/schedule">Shedule</router-link> </h2>

      </div>
     

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

<style lang="scss" scoped>

#info-user{
  margin-top: 25px;
}
#user-photo{
    width: 100px;
    border-radius: 50%;
}
button{
    background-color: #033949;
    padding: 15px 20px;
    border-radius: 10px;
    align-items: center;
    color: white;
    font-weight: 700;
    border: none;
    margin-left: 10px;
    &:hover{
      background-color: #03394991;
       color: #033949;
    }
}
h2{
  margin: 15px;
  font-size: 1.5rem;
}
#container{
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 30px;
  
}
#no-user{
  width: 30vw;
  margin-bottom: 30px;
}
@media only screen and (min-width: 600px) {
  #info-user{
    margin-top: 20px;
  }
  h1{
    margin: 0;
  }
  h2{
    font-size: 20px;
    margin: 3px auto;
    width: 70vw;
  }
  button{
  padding: 8px 20px;
  }
  #user-photo{
    width: 80px;  
  }
  #no-user{
    width: 100px;
    margin-top: 10px;
  }
}

</style>