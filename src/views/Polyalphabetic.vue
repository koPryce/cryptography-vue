<template>
    <Header heading="Polyalphabetic Cipher"/>

    <h3>Encrypt/Decrypt</h3>

    <input type="radio" name="etype" id="encrypt" value="encrypt" v-model="etype">
    <label for="encrypt">Encrypt</label>

    <input type="radio" name="etype" id="decrypt" value="decrypt" v-model="etype">
    <label for="decrypt">Decrypt</label>

    <label for="text">Plaintext/Ciphertext</label>
    <input type="text" name="text" id="text" v-model.trim="text">

    <textarea name="answer" id="answer" cols="30" rows="10" v-model="ans" readonly></textarea>

    <Button @click="performAction" color="green" label="Go"/>

    <Button @click="clearContent" color="red" label="Redo"/>    
</template>

<script>
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

export default {
    name: 'Polyalphabetic',
    components: {
        Header,
        Button,
    },
    data(){
        return{
            etype:null,
            text: "",
            ans: "",
            cipherText: "",
            plainText: "",
        }
    },
    methods: {
        clearContent(){
            this.text = "";
            this.ans = "";  
        },
        encryptText(){
            this.cipherText = "";
            var value;
            for(let i = 0; i < this.plainText.length; i++) {
                value = this.plainText.charAt(i).charCodeAt() - 65;
                if((i+1) % 2 == 0) {
                    value = ((5*value) + 13) % 26;
                }else {
                    value = (3*value) % 26;
                }
                this.cipherText += String.fromCharCode (value + 65);
            }
		    this.ans = this.cipherText;
        },
        decryptText(){
            this.plainText = "";
            var value, counter, placeHolder, isAnswer;
            for(let i = 0; i < this.cipherText.length; i++) {
                isAnswer = false;
                counter = 1;
                value = this.cipherText.charAt(i).charCodeAt() - 65;
                if((i+1) % 2 == 0) {
                    while(!isAnswer) {
                        placeHolder = (((26*counter)+value)-13)/5;
                        if((placeHolder % 1) == 0) {
                            value = placeHolder % 26;
                            isAnswer = true;
                        }else {
                            counter ++;
                        }
                    }
                }else {
                    while(!isAnswer) {
                        placeHolder = ((26*counter)+value)/3;
                        if((placeHolder % 1) == 0) {
                            value = placeHolder % 26;
                            isAnswer = true;
                        }else {
                            counter ++;
                        }
                    }
                }
                this.plainText += String.fromCharCode (value + 65);
            }
            this.ans = this.plainText;
        },
        performAction(){
            if(this.etype === null){
                alert("No encryption type was selected for this operation.");
            }else if(this.text === ""){
                alert("No information was added for the plainText/cipherText field.");
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