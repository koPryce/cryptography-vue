<template>
    <Header heading="Monoalphabetic Cipher"/>

    <section class="etype">
        <h3>Encrypt/Decrypt</h3>
        <input type="radio" name="etype" id="encrypt" value="encrypt" v-model="etype">
        <label for="encrypt">Encrypt</label>
        <input type="radio" name="etype" id="decrypt" value="decrypt" v-model="etype">
        <label for="decrypt">Decrypt</label>
    </section>

    <section class="text">
        <label for="text">Plaintext/Ciphertext</label>
        <input type="text" name="text" id="text" v-model.trim="text">
    </section>

    <section class="key">
        <label for="key">Key/mu</label>
        <input type="number" name="key" id="key" v-model="key">
    </section>

    <section class="answer">
        <textarea name="answer" id="answer" cols="30" rows="10" v-model="ans" readonly></textarea>
    </section>

    <section class="btns">
        <Button @click="performAction" color="#9897A9" label="Go"/>
        <Button @click="clearContent" color="#232023" label="Redo"/>
    </section>   
</template>

<script>
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

export default {
    name: 'Monoalphabetic',
    components: {
        Header,
        Button,
    },
    data(){
        return{
            etype:null,
            key: 0,
            text: "",
            ans: "",
            cipherText: "",
            plainText: "",
        }
    },
    methods: {
        clearContent(){
            this.text = "";
            this.key = 0;
            this.ans = "";  
        },
        encryptText(){
            this.cipherText = "";
            var value;
            for(let i = 0; i < this.plainText.length; i++) {
                value = this.plainText.charAt(i).charCodeAt() + this.key;
                if (value > 90) {
                    value = 64+(value-90);
                }
                this.cipherText+= String.fromCharCode (value);
            }
		    this.ans = this.cipherText;
        },
        decryptText(){
            this.plainText = "";
            var value;
            for(let i = 0; i < this.cipherText.length; i++) {
                value = this.cipherText.charAt(i).charCodeAt() - this.key;

                if(value < 65) {
                    value = 91 - (65-value);
                    console.log(value);
                }
                this.plainText+= String.fromCharCode (value);
            }
            this.ans = this.plainText;
        },
        performAction(){
            if(this.etype === null){
                alert("No encryption type was selected for this operation.");
            }else if(this.text === ""){
                alert("No information was added for the plainText/cipherText field.");
            }else if(this.key === ""){
                alert("No information was added for the key field.");
            }else{
                if(this.etype === "encrypt"){
                    this.plainText = this.text.replace(/\s+/g, '').toUpperCase();
                    this.encryptText();
                }else if(this.etype === "decrypt"){
                    this.cipherText = this.text.replace(/\s+/g, '').toUpperCase();
                    this.decryptText();
                }
            }
        },
    }
}
</script>

<style scoped>
    
</style>