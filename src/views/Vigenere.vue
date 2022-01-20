<template>
    <Header heading="Vigenere Cipher"/>

    <h3>Encrypt/Decrypt</h3>

    <input type="radio" name="etype" id="encrypt">
    <label for="encrypt">Encrypt</label>

    <input type="radio" name="etype" id="decrypt">
    <label for="decrypt">Decrypt</label>

    <label for="text">Plaintext/Ciphertext</label>
    <input type="text" name="text" id="text">

    <label for="key">Key</label>
    <input type="text" name="key" id="key">

    <Button label="<-Back"/>

    <textarea name="answer" id="answer" cols="30" rows="10"></textarea>

    <Button label="Go"/>

    <Button label="Redo"/>    
</template>

<script>
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

export default {
    name: 'Vigenere',
    components: {
        Header,
        Button,
    }
}
</script>

<style scoped>

</style>