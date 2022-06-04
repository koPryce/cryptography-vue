<template>
    <button v-on="$attrs" :style="{background:color}">{{label}}</button>    
</template>

<script>
export default {
    name: 'Button',
    props: {
        label:String,
        color:String,
    },
}
</script>

<style scoped>
button{
    text-transform: uppercase;
    font-size:1rem;
    padding: .5rem .75rem;
    margin: 1rem;
    color: #FFF;
}

button:hover{
    cursor: pointer;
    opacity: .7;
}

</style>