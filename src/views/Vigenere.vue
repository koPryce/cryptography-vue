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

    <Button @click="performAction" color="green" label="Go"/>

    <Button @click="clearContent" color="red" label="Redo"/>    
</template>

<script>
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

export default {
    name: 'Vigenere',
    components: {
        Header,
        Button,
    },
    data(){
        return{
            etype:null,
            text: "",
            key: "",
            ans: "",
            cipherText: "",
            plainText: "",
        }
    },
    methods: {
        clearContent(){
            this.text = "";
            this.key = "";
            this.ans = "";  
        },
        extendKey() {
		    var len = this.text.length;
		
            for(var i = 0; i < len; i++ ){
                if(len === i) {
                    i = 0;
                }
                
                if(this.key.length === len){
                    break;
                }
                this.key += this.key.charAt(i);
            }
	    },
        encryptText(){
            this.extendKey();
            this.cipherText = "";
            for(let i = 0; i < this.plainText.length; i++) {
                console.log(this.cipherText);
                this.cipherText += String.fromCharCode((((this.plainText.charAt(i).charCodeAt() + this.key.charAt(i).charCodeAt()) % 26) + 65));
            }
		    this.ans = this.cipherText;
        },
        decryptText(){
            this.extendKey();
            this.plainText = "";
            for(let i = 0; i < this.cipherText.length; i++) {
                console.log(this.plainText);
                this.plainText += String.fromCharCode(((((this.cipherText.charAt(i).charCodeAt() - this.key.charAt(i).charCodeAt()) + 26) % 26) + 65));
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
                    this.key = this.key.replace(/\s+/g, '').toUpperCase();
                    this.encryptText();
                }else if(this.etype === "decrypt"){
                    this.cipherText = this.text.replace(/\s+/g, '').toUpperCase();
                    this.key = this.key.replace(/\s+/g, '').toUpperCase();
                    this.decryptText();
                }
            }
        },
    }
}
</script>

<style scoped>

</style>