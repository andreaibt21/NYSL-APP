<template>
   <div> 
      <TopVar View="Rules" v-bind:ShowImg="true"/>
      <Collapse />
   </div> 
</template>

<script>
import Collapse from '@/components/Collapse.vue'
import TopVar from '@/components/TopVar.vue'

export default {
name: 'Rules',
components: {
    Collapse,
    TopVar
}

}
</script>

<style>

</style>