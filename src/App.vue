<template>
  <div id="app">

    <div>
      <transition name="fade" mode="out-in"> 
      <router-view/>
      </transition>
    </div>

    <div id="nav">
      <router-link to="/"><i class="fas fa-home"></i></router-link> 
      <router-link to="/about"><i class="fas fa-info-circle"></i> </router-link> 
      <router-link to="/schedule"><i class="fas fa-calendar-alt"></i> </router-link> 
      <router-link to="/registration"><i class="fas fa-file-signature"></i> </router-link> 
      <router-link to="/rules"><i class="fas fa-book"></i> </router-link> 
      <router-link to="/contact"><i class="fas fa-envelope-open-text"></i> </router-link>
      
      
      
    </div>
    
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
 name: 'App',
 methods:{
  ...mapMutations(['listenUser']) 
 },
 beforeMount(){
     this.listenUser()
  }
}
</script>

<style lang="scss">

*{
  margin:0;
  padding: 0;
}
#app {
  font-family:'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: whitesmoke;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}

#nav {
  padding: 23px;
  justify-content: center;
  background-color: #206a5d ;
  position: fixed;
  bottom: 0;
  width: 100vw;
  z-index: 2;
 
  i{
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 10px;
    border-radius: 50%;
    color:#ffffff;
    margin: 0 5px;
    background-color: #08a88c;
    width: 42px;
    height: 42px;
    text-align: center;
  }
  
  a {
   

    &.router-link-exact-active {
      
      i{
      background-color: #1b1c25;}
    }
  }
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to{
  opacity:0;
}
@media only screen and (min-width: 600px) {
  #nav{
    display: none;
  }
}
</style>
