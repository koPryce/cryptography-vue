<template>
    <h1>{{heading}}</h1>
</template>

<script>
export default {
    name: 'Header',
    props: {
        heading:String,
    }

}
</script>

<style scoped>
h1{
    background-color:black;
    color:white;
    text-transform: uppercase;
    letter-spacing: 0.625rem;
    padding: 0.5rem;
}
</style>