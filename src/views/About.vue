<template>
  <div class="about">
    <TopVar View="About Us"/>
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
