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
  i{
    border: 1px solid black;
    padding: 10px;
    border-radius: 50%;
    color:darkcyan;
    
  }
  
  
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      
      i{
      background-color: blue ;}
    }
  }
}
</style>
