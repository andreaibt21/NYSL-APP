<template>
  <div id="app">

    <div>
      <router-view/>
    </div>

    <div id="nav">
      <router-link to="/"><i class="fas fa-home"></i></router-link> |
      <router-link to="/about"><i class="fas fa-info-circle"></i> </router-link> |
      <router-link to="/schedule"><i class="fas fa-calendar-alt"></i> </router-link> |
      <router-link to="/registration"><i class="fas fa-file-signature"></i> </router-link> |
      <router-link to="/rules"><i class="fas fa-book"></i> </router-link> |
      <router-link to="/contact"><i class="fas fa-envelope-open-text"></i> </router-link>
      
      
      
    </div>
    
  </div>
</template>

<style lang="scss">

*{
  margin:0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}

#nav {
  padding: 30px;
  justify-content: center;
  background-color: #146425;
  position: fixed;
  bottom: 0;
  width: 100vw;
  i{
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 10px;
    border-radius: 50%;
    color:#ffffff;
    background-color: #40854e;
    // darkcyan
  }
  
  a {
    font-weight: bold;
  

    &.router-link-exact-active {
      
      i{
      background-color: rgba(32, 86, 158, 0.829) ;}
    }
  }
}
</style>
