<template>
    <Header heading="Monoalphabetic Cipher"/>

    <h3>Encrypt/Decrypt</h3>

    <input type="radio" name="etype" id="encrypt" value="encrypt" v-model="etype">
    <label for="encrypt">Encrypt</label>

    <input type="radio" name="etype" id="decrypt" value="decrypt" v-model="etype">
    <label for="decrypt">Decrypt</label>

    <label for="text">Plaintext/Ciphertext</label>
    <input type="text" name="text" id="text" v-model.trim="text">

    <h3>Type of Key</h3>

    <input type="radio" name="ktype" id="numeric" value="numeric" v-model="ktype">
    <label for="numeric">Numeric</label>

    <input type="radio" name="ktype" id="alphabetic" value="alphabetic" v-model="ktype">
    <label for="alphabetic">Alphabetic</label>

    <label for="key">Key (if numeric, enter with spaces)</label>
    <input type="text" name="key" id="key" v-model="key">

    <textarea name="answer" id="answer" cols="30" rows="10" v-model="ans" readonly></textarea>

    <Button @click="performAction" color="green" label="Go"/>

    <Button @click="clearContent" color="red" label="Redo"/>   
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