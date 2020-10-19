<template>
  <div id="container">
   
      <img src="../assets/nysl.png" alt="logo" />
      <h1>{{View}}</h1>
   
  </div>
</template>

<script>
export default {
  name: "TopVar",
  props: ["View"],
};
</script>

<style scoped lang="scss">
#container {

  background-color: #cfe7bd;
  height: 15vh;
  position: relative;
  display:grid;
  grid-template-areas: " img title title "    ;
  align-items: center;
  grid-column-gap: 10px;
  padding: 10px;
    
    img {
      width: 4.5rem;
      grid-area: img;
       

    }
    h1{
        grid-area: title;
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }

}
</style>