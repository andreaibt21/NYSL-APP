<template>
  <div>
       <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                 {{e.location}}
             </button>

             <!------------ Modal -------------------->
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">{{e.location}}</h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                     </button>
                   </div>
                   <div class="modal-body">

                    <h6>{{e.dir}}</h6> 
                    <iframe v-bind:src="e.map" frameborder="0"></iframe>

                   </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      
                      </div>
                    </div>
                  </div>
                </div>
  </div>
</template>

<script>
export default {
name: "Modal"
}
</script>

<style>

</style>