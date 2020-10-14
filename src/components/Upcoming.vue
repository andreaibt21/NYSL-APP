<template>
    <div class="upcoming">
        <img src="../assets/nysl.png" alt="nysl logo" class="logo">
        <div class="line-logo"></div>

        <div class="container">
            <div>
             <img src="../assets/ball.png" alt="nysl logo" class="logo">
             <h2>August 4</h2>  
             <p>NYSL Fundraiser</p>
            </div>

            <div>
             <img src="../assets/ball.png" alt="nysl logo" class="logo">

             <h2>August 16</h2>
             <p> Season Kick-off: Meet the Teams</p>
            </div>

            <div>
             <img src="../assets/field.png" alt="nysl logo" class="logo">

             <h2>September 1</h2> 
             <p>First Game of the Season (Check Game Shedule for details)</p>
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
    background-color: white;
}

.logo{
    width: 3rem;
}

h2{
 font-size: 13px;
}
</style>