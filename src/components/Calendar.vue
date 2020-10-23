<template>
<div id="table">

<table class="h-100">
    <thead>
            <tr>
              <th >Time/Date</th>
              <th  v-for="(e,index) in dates.nine" v-bind:key="index"  >
                {{e.day}}
                
              </th>
            </tr>
    </thead>
    <tbody >
        <tr class="nine-line">
            <td >9:00</td>
            <td v-for="(e,index) in dates.nine" v-bind:key="index" >

             {{e.teams}}<br>
              
             <b-button v-b-modal="'modal-' + e.number">{{e.location}}</b-button>
             <b-modal v-bind:id="'modal-' + e.number">
            
              {{e.location}} <br>
              {{e.dir}} <br>
              <iframe v-bind:src="e.map" frameborder="0"></iframe>
           
            </b-modal>
                
            </td>
            
        </tr>
        <tr class="one-line">
            <td >13:00</td>
             <td v-for="(e,index) in dates.one" v-bind:key="index" >

                {{e.teams}}<br>
              <b-button v-b-modal="'modal-' + e.number">{{e.location}}</b-button>
              <b-modal v-bind:id="'modal-' + e.number">
            
              {{e.location}} <br>
              {{e.dir}} <br>
              <iframe v-bind:src="e.map" frameborder="0"></iframe>
              </b-modal>          

            </td>   
        </tr>
    </tbody>
</table>

</div>
  
</template>

<script>
export default {
    name:'Calendar',
    props: ['dates'],
   
}
</script>

<style lang="scss">
table{
    width: 100% ;
}
#table{
    font-family: 'Montserrat', sans-serif;
    width: 85vw;
    overflow-x: scroll!important;
    border-radius: 10px;
    margin: 20px auto;
    
}

thead {
    background-color: #1c4c5c;
    color: white;
}
.nine-line{
    background-color: #cfe7bd;
}
.one-line{
    background-color: #b1c7a1;
}

th, td{
        
    padding: 30px;
    width: 150px;
}
.btn-primary{
    background-color: #064d6391!important;
    border: none;
    &:hover{
        background-color:  #0484ac91!important;}
}
iframe{
  width: 100%;
 height: 40%;
}

</style>