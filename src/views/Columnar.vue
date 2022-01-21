<template>
    <Header heading="Columnar Cipher"/>

    <h3>Encrypt/Decrypt</h3>

    <input type="radio" name="etype" id="encrypt" value="1" v-model.number="etype">
    <label for="encrypt">Encrypt</label>

    <input type="radio" name="etype" id="decrypt" value="2" v-model.number="etype">
    <label for="decrypt">Decrypt</label>

    <label for="text">Plaintext/Ciphertext</label>
    <input type="text" name="text" id="text" v-model.trim="text">

    <label for="key">Key</label>
    <input type="text" name="key" id="key" v-model.trim="key">

    <!-- <Button label="<-Back"/> -->

    <textarea name="answer" id="answer" cols="30" rows="10" v-model="ans"></textarea>

    <Button @click="performAction" label="Go"/>

    <Button @click="clearContent" label="Redo"/>    
</template>

<script>
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

export default {
    name: 'Columnar',
    components: {
        Header,
        Button,
    },
    data(){
        return{
            text: "",
            key: "",
            ans: "",
            etype: 1,
        }
    },
    methods:{
        clearContent(){
            this.text = "";
            this.key = "";
            this.ans = "";  
        },
        performAction(){
            // if(!this.etype && !this.dtype){
            //     alert("No encryption type was selected for this operation.");
            // }else 
            if(this.text === ""){
                alert("No information was added for the plaintext/ciphertext field.");
            }else if(this.key === ""){
                alert("No information was added for the key field.");
            }else{
                if(this.etype.valueOf == 1){
                    encryptText();
                }else if(this.dtype == 2){
                    decryptText();
                }
            }
        },
        encryptText(){
            alert("Encrypted!");
        },
        decryptText(){
            alert("Decrypted!");
        }
    }
}
</script>

<style scoped>

</style>