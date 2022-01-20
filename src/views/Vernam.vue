<template>
    <Header heading="Monoalphabetic Cipher"/>

    <h3>Encrypt/Decrypt</h3>

    <input type="radio" name="etype" id="encrypt">
    <label for="encrypt">Encrypt</label>

    <input type="radio" name="etype" id="decrypt">
    <label for="decrypt">Decrypt</label>

    <label for="text">Plaintext/Ciphertext</label>
    <input type="text" name="text" id="text">

    <h3>Type of Key</h3>

    <input type="radio" name="ktype" id="numeric">
    <label for="numeric">Numeric</label>

    <input type="radio" name="ktype" id="alphabetic">
    <label for="alphabetic">Alphabetic</label>

    <label for="key">Key (if numeric, enter with spaces)</label>
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
    name: 'Vernam',
    components: {
        Header,
        Button,
    }
}
</script>

<style scoped>

</style>