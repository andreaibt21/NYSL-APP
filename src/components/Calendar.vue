<template>
<div id="table">
<table>
    <thead>
        <tr v-for="(e,index) in dates.nine" v-bind:key="index">
            <th >{{e.day}}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>@nine</td>
            <td>@one</td>
        </tr>
    </tbody>
</table>

</div>
  
</template>

<script>
export default {
    name:'Calendar',
    props: ['dates']
}
</script>

<style>

</style>