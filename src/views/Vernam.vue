<template>
    <Header heading="Vernam Cipher"/>

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
        <h3>Type of Key</h3>
        <input type="radio" name="ktype" id="numeric" value="numeric" v-model="ktype">
        <label for="numeric">Numeric</label>
        <input type="radio" name="ktype" id="alphabetic" value="alphabetic" v-model="ktype">
        <label for="alphabetic">Alphabetic</label>
        <label for="key">Key (if numeric, enter with spaces)</label>
        <input type="text" name="key" id="key" v-model.trim="key">
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
    name: 'Vernam',
    components: {
        Header,
        Button,
    },
    data() {
        return{
            etype:null,
            text: '',
            ktype:null,
            key:'',
            ans: '',
            cipherText: '',
            plainText: '',
        }
    },
    methods:{
        clearContent(){
            this.text = "";
            this.key = "";
            this.ans = "";  
        },
        encryptText(){
            this.cipherText = "";
            var number = this.plainText.length;
            var pad = new Array(number);
            var padC = new Array(number);
            var tempArr = this.key.split(" ");
            var numericPlainText, numericKeyPad;
            if(this.ktype === "numeric"){
                for(let i = 0; i < number; i++){
                    pad[i] = parseInt(tempArr[i]);
                }

                for(let i = 0; i < number; i++){
                    numericPlainText = this.plainText.charAt(i).charCodeAt() - 65; 
                    this.cipherText += String.fromCharCode(((numericPlainText + pad[i]) % 26) + 65);
                    console.log("Plaintext:",numericPlainText);
                    console.log(pad[i]);
                    console.log("Ciphertext:",this.cipherText);
                    
                }
            }else if(this.ktype === "alphabetic"){
                this.key = this.key.replace(/\s+/g, '');
                for(let i = 0; i < number; i++){
                    padC[i] = this.key.charAt(i);
                }

                for(let i = 0; i < number; i++){
                    numericPlainText = this.plainText.charAt(i).charCodeAt() - 65;
                    numericKeyPad = padC[i].charAt(0).toUpperCase().charCodeAt() - 65;
                    this.cipherText += String.fromCharCode(((numericPlainText + numericKeyPad) % 26) + 65);
                    
                }
            }
            this.ans = this.cipherText; 
        },
        decryptText(){
            this.plainText = "";
            var number = this.cipherText.length;
            var pad = new Array(number);
            var padC = new Array(number);
            var numericCipherText, numericKeyPad;
            var temp;
            var tempArr = this.key.split(" ");
            if(this.ktype === "numeric"){
                for(let i = 0; i < number; i++){
                    pad[i] = parseInt(tempArr[i]);
                }

                for(let i = 0; i < number; i++){
                    numericCipherText = this.cipherText.charAt(i).charCodeAt() - 65; 
                    temp = numericCipherText - pad[i];
                    if(temp < 0){
                        temp += 26;
                    }
                    this.plainText += String.fromCharCode(temp + 65);
                    console.log("CipherText:",numericCipherText);
                    console.log(pad[i]);
                    console.log("Pad value:", numericKeyPad);
                    console.log("temp value", temp);
                    console.log("Plaintext:",this.plainText);
                }
            }else if(this.ktype === "alphabetic"){
                this.key = this.key.replace(/\s+/g, '');
                for(let i = 0; i < number; i++){
                    padC[i] = this.key.charAt(i);
                }

                 for(let i = 0; i < number; i++){
                    numericCipherText = this.cipherText.charAt(i).charCodeAt() - 65;
                    numericKeyPad = padC[i].charAt(0).toUpperCase().charCodeAt() - 65;
                    temp = numericCipherText - numericKeyPad;
                    if(temp < 0){
                        temp += 26;
                    }
                    this.plainText += String.fromCharCode(temp + 65);
                    console.log("CipherText:",numericCipherText);
                    console.log(padC[i]);
                    console.log("Pad value:", numericKeyPad);
                    console.log("temp value", temp);
                    console.log("Plaintext:",this.plainText);
                }
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
            }else if(this.ktype === null) {
					alert("No key type was selected for this operation.");
			}else{
                if(this.etype === "encrypt"){
                    this.plainText = this.text.replace(/\s+/g, '').toUpperCase();
                    this.encryptText();
                }else if(this.etype === "decrypt"){
                    this.cipherText = this.text.replace(/\s+/g, '').toUpperCase();
                    this.decryptText();
                }
            }
        }
    }
}
</script>

<style scoped>
    
</style>