<template>
  <div class="home">
     <TopVar View="Home" v-bind:ShowImg="false"/>
    <Upcoming/>
  </div>
</template>

<script>
// @ is an alias to /src
import Upcoming from '@/components/Upcoming.vue';
import TopVar from '@/components/TopVar.vue'

export default {
  name: 'Home',
  components: {
    TopVar,
    Upcoming
  }
}
</script>
