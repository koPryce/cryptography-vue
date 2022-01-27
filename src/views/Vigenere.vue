<template>
    <Header heading="Vigenere Cipher"/>

    <h3>Encrypt/Decrypt</h3>

    <input type="radio" name="etype" id="encrypt" value="encrypt" v-model="etype">
    <label for="encrypt">Encrypt</label>

    <input type="radio" name="etype" id="decrypt" value="decrypt" v-model="etype">
    <label for="decrypt">Decrypt</label>

    <label for="text">Plaintext/Ciphertext</label>
    <input type="text" name="text" id="text" v-model.trim="text">

    <label for="key">Key</label>
    <input type="text" name="key" id="key" v-model.trim="key">

    <textarea name="answer" id="answer" cols="30" rows="10" v-model="ans" readonly></textarea>

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