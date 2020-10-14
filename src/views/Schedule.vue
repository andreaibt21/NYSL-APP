<template>
  <TopVar View="Schedule"/>
</template>

<script>
import TopVar from '@/components/TopVar.vue'
export default {
  name: 'Schedule',
  components: {
    TopVar
  },
  data: function (){
    return{
      dates = {        
        Sep:{ 
          nine: [ 
            {day:'9/01',
            teams: 'U1 and U4',
            location: 'AJ Katzenmaier'},
            {day:'9/08',
            teams: 'U5 and U6',
            location: 'Howard A Yeager'}
            ,
            {day:'9/15',
            teams: 'U2 and U4',
            location: 'North'}
            ,
            {day:'9/22',
            teams: 'U1 and U3',
            location: 'South'}
            ,
            {day:'9/29',
            teams: 'U4 and U5',
            location: '	Greenbay'}
            ],
          one:[
            {day:'9/01',
            teams: 'U3 and U2',
            location: 'Greenbay'}
            ,
            {day:'9/08',
            teams: 'U6 and U1',
            location: 'Marjorie P Hart'}
            ,
            {day:'9/15',
            teams: 'U3 and U5',
            location: '	AJ Katzenmaier'}
            ,
            {day:'9/22',
            teams: 'U2 and U6',
            location: 'Howard A Yeager'}
            ,
            {day:'',
            teams: '',
            location: ''},
            ]
        },
       Oct:{

      }  
     },
    }
  }
}
</script>

<style>

</style>