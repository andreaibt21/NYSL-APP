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
             
                <p>{{e.teams}}</p>
                <p> {{e.location}}</p> 
               
                <b-button v-bind:to="'/chat/'+e.number" class="b-table b-vertical">Chat</b-button>

                <div class="button-landscape">
                  
                  <b-button v-b-toggle="'collapse-' + e.number" variant="primary" class="b-table"><i class="fas fa-map-marked-alt"></i></b-button>
                  <b-collapse v-bind:id="'collapse-' + e.number" class="mt-2">
                    <b-card>
                      <p class="card-text">

                        {{e.location}} <br>
                        {{e.dir}} <br>
                        <iframe v-bind:src="e.map" frameborder="0"></iframe>

                      </p>
                     
                    </b-card>
                  </b-collapse>
                </div>
    
                <b-button v-b-modal="'modal-' + e.number"  class="noShow b-table b-vertical"  ><i class="fas fa-map-marked-alt"></i></b-button>
                <b-modal v-bind:id="'modal-' + e.number" centered hide-footer v-bind:title="e.location">
                  
                 
                 {{e.dir}} <br>
                 <iframe v-bind:src="e.map" frameborder="0"></iframe>
                 
                </b-modal>
             
            </td>
            
        </tr>
        <tr class="one-line">
            <td >13:00</td>
             <td v-for="(e,index) in dates.one" v-bind:key="index" >

                <p>{{e.teams}}</p>
                <p> {{e.location}}</p> 

                <b-button v-bind:to="'/chat/'+e.number" class="b-table b-vertical">Chat</b-button>
                    
                <div class="button-landscape">
                 
                  <b-button v-b-toggle="'collapse-' + e.number" variant="primary" class="b-table"><i class="fas fa-map-marked-alt"></i></b-button>
                 
                  <b-collapse v-bind:id="'collapse-' + e.number" class="mt-2">
                    <b-card>
                      <p class="card-text">

                        {{e.location}} <br>
                        {{e.dir}} <br>
                        <iframe v-bind:src="e.map" frameborder="0"></iframe>

                      </p>
                     
                    </b-card>
                  </b-collapse>
                </div>

                <b-button v-b-modal="'modal-' + e.number"  class="noShow b-table b-vertical"><i class="fas fa-map-marked-alt"></i></b-button>
                <b-modal v-bind:id="'modal-' + e.number" centered hide-footer v-bind:title="e.location">
            
            
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

<style scope lang="scss">
table{
    width: 100% ;
}
#table{
    font-family: 'Montserrat', sans-serif;
    width: 85vw;
    overflow-x: scroll!important;
    border-radius: 10px;
    margin: 20px auto;
 background-color: whitesmoke;
    
}

thead {
    background-color: #1c4c5c;
    color: white;
}
.nine-line{
    background-color: #cfe7bd;
}
#table, .one-line{
    background-color: #b1c7a1;
}

th, td{
    text-align: center;
    padding: 20px 15px;
    width: 150px;
}
.btn-primary, .b-table{
    background-color: #064d6391!important;
    border: none;


    &:hover{
        background-color:  #0484ac91!important;}
}
.b-vertical{
margin: 5px 10px 0 10px;
}
iframe{
  width: 100%;
 height: 40%;
}
b-button{
    margin: 0 auto;
    height: 48px;
}
.b-location{
    margin-top: 10px;
}
p{
    width: 180px;
    margin: 0 auto;
}
i{
    font-size: 20px;
}
.button-landscape{
    display: none;
   margin-top: 10px;
} 


@media only screen and (min-width: 600px) {
  .noShow{
    display: none;
  }
  .button-landscape{
    display: block;
}
.b-vertical{

margin: 10px 0 0 0;

}
}
</style>