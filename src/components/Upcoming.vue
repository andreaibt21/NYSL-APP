<template>
    <div class="upcoming">
        <div class="header-space">
            <div class="line-logo"> 
              <img src="../assets/nysl.png" alt="nysl logo" class="logo">
            </div>   
        </div>
            <div class="container">
            <div>
             <img src="../assets/donation.png" alt="nysl icon" class="icon">
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
             <p>First Game of the Season <br>(Check Game Shedule for details)</p>
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
    
    .header-space{
        height: 20vh;
        width: 100vw;
        display: flex;
        align-items: center;
        .line-logo{
            background-color: #cfe7bd;
            width: 100vw;
            height: 2.5rem;
            
            .logo{
                width: 6rem;
               margin-top: -1.5rem;
            }
        }
    }
}
.icon{
    width: 3rem;
}
.container{
  
    padding-top: 20px;
}

h2{
 font-size: bold;
 font-size: 25px;
}
</style>