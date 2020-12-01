<template>
    <div class="upcoming">
        <div class="header-space">
            <div class="line-logo"> 
              <img src="../assets/nysl.png" alt="nysl logo" class="logo">
            </div>   
         </div>
            <div class="container">
            <div>
             <img src="../assets/donation.svg" alt="nysl icon" class="icon">
             <h2>August 4</h2>  
             <p>NYSL Fundraiser</p>
            </div>

            <div>
             <img src="../assets/ball.png" alt="nysl icon" class="icon">

             <h2>August 16</h2>
             <p> Season Kick-off: Meet the Teams</p>
            </div>

            <div>
             <img src="../assets/field.png" alt="nysl icon" class="icon">

             <h2>September 1</h2> 
             <p id="long">First Game of the Season <br>(Check Game  <router-link to="/schedule">Shedule and Chatrooms</router-link>)</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Upcoming',

}
</script>

<style scoped lang="scss">
.upcoming{
    background-color: whitesmoke;
    font-family: 'Montserrat', sans-serif;
    margin-top: 0;
    .header-space{
        height: 17vh;
        width: 100vw;
        display: flex;
        align-items: center;
        .line-logo{
            width: 100vw;
            height: 10vh;
            
            .logo{
                width: 6rem;
               margin-top: -1rem;
              
            }
        }
    }
}
.icon{
    width: 2.8rem;
  margin-top: 0;
}


h2{
 font-size: bold;
 font-size: 25px;
 width: 170px;
 margin: 0 auto;
}
p{
    margin-bottom: 10px;
}
@media only screen and (min-width: 600px) {
 .header-space{
     height: 30vh!important;
  
 }.logo{
         margin-top: -1.8rem!important ;
     }
.container{
    display: flex;
    justify-content: space-around;
    div{
        width: 34%;
        margin: 0 5px;
    }
    h2{
        border-bottom: 1px solid darkblue;
    }
}
}
#long{
     width: 80%;
     margin: 0 auto;
}

</style>