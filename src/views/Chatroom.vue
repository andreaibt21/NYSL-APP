<template>
  <div id="chatroom">  
    <TopVar :View=" 'Chatroom N° '+$route.params.id" v-bind:ShowImg="true"/>

    
    <template v-if="user==null">
        <div class="Need-login">
            <h1>Hello!</h1>
            <h2>To have acces to the chatroom you have to login</h2>
            
            <b-button to="/login" id="login"> login</b-button>
        </div>
    </template> 
    <template v-else>
       <div id="body">
           <div id="messages-container">
                <div v-for="(message,index) in messages" :key="index" class="bubble">
                 <div>
                  <img id="user-photo" :src="message.img" :alt="message.author">
                 </div>
                  <div>
                    <p>
                        <strong>{{message.author}} said:</strong>
                    </p>
                    <p>
                        {{message.body}}
                    </p>
                    </div>
                </div>
            </div>
           <form @submit.prevent="post()">
               <input type="text" placeholder="Enter your message" v-model="input" />
               <button type="submit">Send</button>
           </form>


        </div> 

    </template>
    

  </div>
</template>

<script>
import {mapState} from 'vuex';
import { db } from "../firebase/db";
import TopVar from '@/components/TopVar.vue'

export default {
    name:'Chatroom',
    data(){
        return{
            messages:[{author:"juan", body:"hola"}],
            input:null
        
        }
    },
    components: {
    TopVar
    },
    methods:{
        post: function(){
          let folder = db.ref("forum/match" + this.$route.params.id)
          
          let message = {
              body: this.input,
              author: this.user.displayName,
              date: new Date(),
              img: this.user.photoURL
          }
        
          folder.push(message)
          this.input = null
        }
        // ,
        // updateScroll: function(){
        //  let element = document.getElementById("messages-container");
        //   element.scrollTop = element.scrollHeight;
        // }
    },
    computed: {
        ...mapState(['user'])
    },
    mounted(){
        this.messages = [];
        db.ref("forum/match" + this.$route.params.id).on("child_added",(snapshot) => {
            this.messages.push(snapshot.val())
        })
    }
    // ,
    // update(){
    //      let element = document.getElementById("messages-container");
    //       element.scrollTop = element.scrollHeight;
    // }

}
</script>

<style lang="scss" scoped>
#login{
    border: 2px solid black;
    padding: 10px;
}
.body{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.bubble{
    text-align: left;
    border-radius: 20px;
    background-color: #cfe7bd;
    padding: 2em 1.5em;
    margin: 20px ;
    min-width: 25vw;
  font-family:'Montserrat', sans-serif;
    display: flex;
    align-items: center;
}
#messages-container{
    height: 60vh;
    overflow-y: scroll!important;
}
form{
    position: fixed;
    bottom: 110px;
    left: 10vw;
    input{
    width: 55vw;
    background-color: #064d6391 ;
    color: white;
    border-radius: 10px;
    padding: 5px 20px;
    }
    ::placeholder {
        color: white;
    }
    button {
    background-color: #033949;
    padding: 15px 20px;
    border-radius: 10px;
    align-items: center;
    color: white;
    font-weight: 700;
    border: none;
    margin-left: 10px;
    &:hover{
      background-color: #03394991;
       color: #033949;
    }
} 
}
p{
    margin: 0;
}
 #login {
    background-color: #033949;
    padding: 15px 20px;
    border-radius: 10px;
    align-items: center;
    color: white;
    font-weight: 700;
    border: none;
    margin-left: 10px;
    width: 120px;
    &:hover{
      background-color: #03394991;
       color: #033949;
}}

.Need-login{
    padding: 20px;
    h2{
        margin: 20px 0;
    }
}

img{
    width: 60px;
    border-radius: 50%;
    margin-right: 10px;
}
@media only screen and (min-width: 600px) {
form{
    margin-top: 10px;
}
}
</style>