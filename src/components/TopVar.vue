<template>

 <div>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand href="#">
    
       <img v-show="ShowImg" src="../assets/nysl.png" class="logo" alt="">
      {{View}}
      </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>

          <b-nav-item class="noShow"> <router-link to="/"><i class="fas fa-home"></i> Home </router-link> </b-nav-item>
          <b-nav-item class="noShow"> <router-link to="/about"><i class="fas fa-info-circle"></i>About </router-link> </b-nav-item>
          <b-nav-item class="noShow"> <router-link to="/schedule"><i class="fas fa-calendar-alt"></i> Schedule </router-link> </b-nav-item>
          <b-nav-item class="noShow"> <router-link to="/registration"><i class="fas fa-file-signature"></i>Registration </router-link> </b-nav-item>
          <b-nav-item class="noShow"> <router-link to="/rules"><i class="fas fa-book"></i> Rules </router-link> </b-nav-item>
          <b-nav-item class="noShow"> <router-link to="/contact"><i class="fas fa-envelope-open-text"></i> Contact </router-link></b-nav-item>
          <b-nav-item> <router-link to="/login"><i class="fas fa-envelope-open-text"></i> Log In </router-link></b-nav-item>

        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
   </div>


 
</template>

<script>
export default {
  name: "TopVar",
  props: ["View", "ShowImg"],
  
};

</script>

<style scoped lang="scss">
div{
    font-family: 'Montserrat', sans-serif;
    color:white;
}
.bg-info {
    background-color: #cfe7bd !important;
}
.navbar-light .navbar-brand {
    color: #21963b!important;
}
// .navbar-toggler{
// background-color: #146425!important ; 
// }
a {
  color: #21963b;
 
 &.router-link-exact-active {
    color:  #2c748a;
  ;
    i{
    color:  #2c748a;
    }
  }
}
.logo{
width: 3rem;
}
.noShow{
  display:none;
}

@media only screen and (min-width: 600px) {
  .noShow{
    display: block;
  }
}
</style>