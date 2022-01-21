<template>
    <button v-on="$attrs">{{label}}</button>    
</template>

<script>
export default {
    name: 'Button',
    props: {
        label:String,
    },
}
</script>

<style scoped>
button{
    color: white;
    background-color: black;
    border: 1px solid black;
    text-transform: uppercase;
    font-size:23px;
    padding:.5em;
    margin: 1em;
}

button:hover{
    cursor: pointer;
    border: 3px red solid;
}

</style>