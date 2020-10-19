<template>
   <div> 
      <TopVar View="Rules"/>
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