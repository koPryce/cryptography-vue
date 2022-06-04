<template>
    <p>Copyright &copy; 2022</p>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
p{
    text-align: center;
    text-transform: capitalize;
    color: white;
    background-color:black;
    font-size:1.13em;
    padding: 0.5rem;
}

@media(width < 25em){
    p{
        font-size:.75em;
    }
}

</style>