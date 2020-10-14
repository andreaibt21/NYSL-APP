<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/nysl_logo.png"> -->
    <Upcoming/>
  </div>
</template>

<script>
// @ is an alias to /src
import Upcoming from '@/components/Upcoming.vue'
export default {
  name: 'Home',
  components: {
    Upcoming
  }
}
</script>
