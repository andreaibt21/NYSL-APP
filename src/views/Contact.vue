<template>
 <div>
  <TopVar  View="Contact" v-bind:ShowImg="true"/>
  <Email />
  </div>
</template>

<script>
import Email from '@/components/Email.vue'
import TopVar from '@/components/TopVar.vue'
export default {
name: 'Contact',
    components:{
       Email,
       TopVar
    }
}
</script>

<style>
#email {
    width: 50px;
    margin: 0 auto;
}
</style>    