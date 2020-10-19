<template>
  <div>
    <TopVar View="Schedule"/>
    <Calendar v-bind:dates = "dates.Sep"  />
 </div>
</template> 

<script>
import TopVar from '@/components/TopVar.vue'
import Calendar from '@/components/Calendar.vue'
export default {
  name: 'Schedule',
  components: {
    TopVar,
    Calendar
  },
  data: function (){
    return{
      dates: {        
        Sep:{ 
          nine: [ 
            {day:'9/01',
            teams: 'U1 and U4',
            location: 'AJ Katzenmaier'}
            ,
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
          nine: [
             {day:'10/06',
            teams: 'U2 and U5',
            location: 'Marjorie P Hart'},
            {day:'10/13',
            teams: 'U3 and U4',
            location: 'Howard A Yeager'},
            {day:'10/20',
            teams: 'U6 and U3',
            location: 'North'},
            {day:'10/27',
            teams: 'U3 and U1',
            location: 'AJ Katzenmaier'},

          ],
          one: [
            {day:'10/06',
            teams: 'U1 and U6',
            location: '	South'},
            {day:'10/13',
            teams: 'U5 and U1',
            location: 'Greenbay'},
            {day:'10/20',
            teams: 'U2 and U4',
            location: 'Marjorie P Hart'},
            {day:'10/27',
            teams: 'U5 and U6',
            location: 'Howard A Yeager'},

          ]

        }  
      },
    }
  }
}
</script>

<style>

</style>