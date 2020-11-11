<template>
  <div id="schedule">
    <TopVar View="Schedule" v-bind:ShowImg="true"/>
    <div id="cal">
      <h3>September</h3>
      <Calendar v-bind:dates = "dates.Sep"  />
     
      <h3>October</h3>
      <Calendar v-bind:dates = "dates.Oct"  />
    </div>
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
            {number:"1",
            day:'9/01',
            teams: 'U1 and U4',
            location: 'AJ Katzenmaier',
            dir:'1734 N. Orleans St., Chicago, IL 60614',
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.781070817098!2d-87.86499018509608!3d42.32586807918919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sKatzenmaier%20School!5e0!3m2!1ses!2sar!4v1594250956908!5m2!1ses!2sar"
            }
            ,
            {number:"2",
            day:'9/08',
            teams: 'U5 and U6',
            location: 'Howard A Yeager',
            dir:"2245 N. Southport Ave., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5857668321864!2d-87.66511238511225!3d41.92326277921869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6cb22b2f0358874!2sHoward%20A%20Yeager%20Elementary!5e0!3m2!1ses!2sar!4v1594251249538!5m2!1ses!2sar"
            }
            ,
            {number:"3",
            day:'9/15',
            teams: 'U2 and U4',
            location: 'North Elementary',
            dir:"1409 N. Ogden Ave., Chicago, IL 60610" ,
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3460090708527!2d-87.64798528511292!3d41.90691997921986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5736e62f19086c62!2sNorth%20Elementary!5e0!3m2!1ses!2sar!4v1594251374798!5m2!1ses!2sar"
            }
            ,
            {number:"4",
            day:'9/22',
            teams: 'U1 and U3',
            location: 'South Elementary',
            dir:"2101 N. Fremont St., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7306533156693!2d-87.6528641851124!3d41.92014857921881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196e269cbf%3A0x1caabcbc4893f0da!2sSt%20James%20Lutheran%20School!5e0!3m2!1ses!2sar!4v1594251432191!5m2!1ses!2sar"
            }
            ,
            {number:"5",
            day:'9/29',
            teams: 'U4 and U5',
            location: '	Greenbay Elementary',
            dir:"1734 N. Orleans St., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0244330281635!2d-87.64002508511265!3d41.91383347921942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses!2sar!4v1594251133053!5m2!1ses!2sar"}
            ],
          one:[
            {number:"6",
            day:'9/01',
            teams: 'U3 and U2',
            location: 'Greenbay Elementary',
            dir:"1734 N. Orleans St., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0244330281635!2d-87.64002508511265!3d41.91383347921942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses!2sar!4v1594251133053!5m2!1ses!2sar"}
            ,
            {number:"7",
            day:'9/08',
            teams: 'U6 and U1',
            location: 'Marjorie P Hart',
            dir:"2625 N. Orchard St., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289839348972!2d-87.648161385112!3d41.92962287921816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1594251298478!5m2!1ses!2sar"
            }
            ,
            {number:"8",
            day:'9/15',
            teams: 'U3 and U5',
            location: '	AJ Katzenmaier',
            dir:'1734 N. Orleans St., Chicago, IL 60614',
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.781070817098!2d-87.86499018509608!3d42.32586807918919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sKatzenmaier%20School!5e0!3m2!1ses!2sar!4v1594250956908!5m2!1ses!2sar"
            }
            ,
            {number:"9",
            day:'9/22',
            teams: 'U2 and U6',
            location: 'Howard A Yeager',
            dir:"2245 N. Southport Ave., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5857668321864!2d-87.66511238511225!3d41.92326277921869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6cb22b2f0358874!2sHoward%20A%20Yeager%20Elementary!5e0!3m2!1ses!2sar!4v1594251249538!5m2!1ses!2sar"
            }
            ,
            ]
        },
        Oct:{
          nine: [
             {number:"11",
             day:'10/06',
            teams: 'U2 and U5',
            location: 'Marjorie P Hart',
            dir:"2625 N. Orchard St., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289839348972!2d-87.648161385112!3d41.92962287921816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1594251298478!5m2!1ses!2sar"}
            ,
            {number:"12",
            day:'10/13',
            teams: 'U3 and U4',
            location: 'Howard A Yeager',
            dir:"2625 N. Orchard St., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289839348972!2d-87.648161385112!3d41.92962287921816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1594251298478!5m2!1ses!2sar"
            }
            ,
            {number:"13",
            day:'10/20',
            teams: 'U6 and U3',
            location: 'North Elementary',
            dir:"1409 N. Ogden Ave., Chicago, IL 60610" ,
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3460090708527!2d-87.64798528511292!3d41.90691997921986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5736e62f19086c62!2sNorth%20Elementary!5e0!3m2!1ses!2sar!4v1594251374798!5m2!1ses!2sar"
            }
            ,
            {number:"14",
            day:'10/27',
            teams: 'U3 and U1',
            location: 'AJ Katzenmaier',
            dir:'1734 N. Orleans St., Chicago, IL 60614',
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.781070817098!2d-87.86499018509608!3d42.32586807918919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sKatzenmaier%20School!5e0!3m2!1ses!2sar!4v1594250956908!5m2!1ses!2sar"
            },

          ],
          one: [
            {number:"15",
            day:'10/06',
            teams: 'U1 and U6',
            location: 'South Elementary',
            dir:"2101 N. Fremont St., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7306533156693!2d-87.6528641851124!3d41.92014857921881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196e269cbf%3A0x1caabcbc4893f0da!2sSt%20James%20Lutheran%20School!5e0!3m2!1ses!2sar!4v1594251432191!5m2!1ses!2sar"
            }
            ,
            {number:"16",
            day:'10/13',
            teams: 'U5 and U1',
            location: 'Greenbay Elementary',
            dir:"1734 N. Orleans St., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0244330281635!2d-87.64002508511265!3d41.91383347921942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses!2sar!4v1594251133053!5m2!1ses!2sar"
            }
            ,
            {number:"17",
            day:'10/20',
            teams: 'U2 and U4',
            location: 'Marjorie P Hart',
            dir:"2625 N. Orchard St., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289839348972!2d-87.648161385112!3d41.92962287921816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1594251298478!5m2!1ses!2sar"
            }
            ,
            {number:"18",
            day:'10/27',
            teams: 'U5 and U6',
            location: 'Howard A Yeager',
            dir:"2245 N. Southport Ave., Chicago, IL 60614",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5857668321864!2d-87.66511238511225!3d41.92326277921869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6cb22b2f0358874!2sHoward%20A%20Yeager%20Elementary!5e0!3m2!1ses!2sar!4v1594251249538!5m2!1ses!2sar"
            }

          ]

        }  
      },
    }
  }
}
</script>

<style lang="scss">
#schedule{
margin-bottom: 150px;
font-family: 'Montserrat', sans-serif;
 background-color: whitesmoke;
#cal{
  margin-top: 20px
}
}
</style>