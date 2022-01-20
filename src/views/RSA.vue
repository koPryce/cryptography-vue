<template>
    <Header heading="RSA"/>

    <h3>Encrypt/Decrypt</h3>

    <input type="radio" name="etype" id="encrypt">
    <label for="encrypt">Encrypt</label>

    <input type="radio" name="etype" id="decrypt">
    <label for="decrypt">Decrypt</label>

    <label for="p">p</label>
    <input type="text" name="p" id="p">

    <label for="q">q</label>
    <input type="text" name="q" id="q">

    <label for="e">e</label>
    <input type="text" name="e" id="e">

    <label for="d">d (if bit given, enter -1)</label>
    <input type="text" name="d" id="d">

    <label for="text">Plaintext/Ciphertext</label>
    <input type="text" name="text" id="text">

    <Button label="<-Back"/>

    <textarea name="answer" id="answer" cols="30" rows="10"></textarea>

    <Button label="Go"/>

    <Button label="Redo"/>    
</template>

<script>
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

export default {
    name: 'RSA',
    components: {
        Header,
        Button,
    }
}
</script>

<style scoped>

</style>