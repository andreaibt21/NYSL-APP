<template>
  <div class="about">
    <TopVar View="About Us" v-bind:ShowImg="true"/>
   <Carousel/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import TopVar from '@/components/TopVar.vue'
export default {
  name: 'About',
  components: {
    Carousel,
    TopVar
  }
}
</script>
