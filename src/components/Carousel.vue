<template>
  <div id="Carousel" >
    <div id="carouselExampleControls" class="carousel slide h-100" data-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h2>General Information</h2>
          <p>The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's
                    northside neighborhood an environment in which to learn and play soccer. To be a member of NYSL, you
                    must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is ran by a
                    small full-time staff, and relies on the generous volunteer time of parents and previus league
                    members.</p>
        </div>
        <div class="carousel-item">
          <h2>Mission</h2>
          <p>To support young athletes living in Chicago's northside neighborhood, who have an interest in
                    learning and playing soccer, with opportunities to learn and practice skill related to the game of soccer,
                    specifically those skills around team cooperation and good sportsmanship.</p>
        </div>
        <div class="carousel-item">
          <h2>Vision</h2>
          <p>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes
                    through
                    the building of character, self-discipline, and leadership.</p>
        </div>
      </div>
      <a class="carousel-control-prev"  href="#carouselExampleControls" role="button"
        data-slide="prev">

        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only" fill="currentColor">Previous</span>
      </a>
      <a class="carousel-control-next"  href="#carouselExampleControls"  role="button"
        data-slide="next" >

        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped lang="scss">

.carousel-control-prev-icon {
    background-image: 
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23163178' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
    background-image: 
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23163178' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}


#Carousel{
  font-family: 'Montserrat', sans-serif;
  height: 70vh;
  h2{
    font-weight: bold;
    padding-top: 1.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    
  }
  p{
    padding: 3.5rem;
    padding-top: 2rem;
  }


}
</style>