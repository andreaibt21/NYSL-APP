<template>
  <div>
      <TopVar View="Registration Form" v-bind:ShowImg="true"/>
      <Form/>
  </div>
</template>

<script>
import TopVar from '@/components/TopVar.vue'
import Form from '@/components/Form.vue'


export default {
  name: 'Registration',
  components:{
      TopVar,
      Form
  }
}
</script>

<style>

</style>