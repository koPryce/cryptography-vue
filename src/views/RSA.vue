<template>
    <Header heading="RSA"/>

    <h3>Encrypt/Decrypt</h3>

    <input type="radio" name="etype" id="encrypt" value="encrypt" v-model="etype">
    <label for="encrypt">Encrypt</label>

    <!-- <input type="radio" name="etype" id="decrypt" value="decrypt" v-model="etype">
    <label for="decrypt">Decrypt</label> -->

    <label for="p">p</label>
    <input type="number" name="p" id="p" v-model="p">

    <label for="q">q</label>
    <input type="number" name="q" id="q" v-model="q">

    <label for="e">e</label>
    <input type="number" name="e" id="e" v-model="e">

    <label for="d">d (if bit given, enter -1)</label>
    <input type="number" name="d" id="d" v-model="d">

    <label for="text">Plaintext/Ciphertext</label>
    <input type="number" name="text" id="text" v-model="text">

    <textarea name="answer" id="answer" cols="30" rows="10" v-model="ans" readonly></textarea>

    <Button @click="performAction" color="green" label="Go"/>

    <Button @click="clearContent" color="red" label="Redo"/>    
</template>

<script>
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

export default {
    name: 'RSA',
    components: {
        Header,
        Button,
    },
    data(){
        return{
            etype: null,
            ans:"",
            p:0,
            q:0,
            e:0,
            d:-1,
            text:0,
            cipherText: 0,
            plainText: 0,
        }
    },
    methods:{
        clearContent(){
            this.ans = "";
            this.p = 0;
            this.q = 0;
            this.e = 0;
            this.d = -1;
            this.text = 0;

        },
        calculateD(){
            var m, counter, isAnswer,placeholder;
            if(this.d == -1){
                m = ((this.p - 1) * (this.q - 1));
                isAnswer = false;
                counter = 1;
                while(!isAnswer){
                    placeholder = ((m * counter) + 1) /this.e;
                    if((placeholder % 1) == 0){
                        this.d = placeholder;
                        isAnswer = true;
                    }else{
                        counter++;
                    }
                }
            }
        },
        encryptRSA(){
            this.cipherText = 0;
            var n, bigN = 0n, bigM = 0n;
            n = this.p * this.q;
            bigN = n;
            bigM = this.text;
            this.cipherText = (bigM ** this.e) % bigN;
            this.ans = this.cipherText;
        },
        decryptRSA(){
            this.plainText = 0;
            var n, bigN = 0n, bigC = 0n, bigA = 0n;
            n = this.p * this.q;
            bigN = n;
            this.calculateD();
            bigC = this.text;
            console.log(bigC);
            console.log(bigN);
            bigA = (bigC ** this.d); 
            console.log(bigA);
            bigA %= bigN;
            this.ans = bigA;
        },
        performAction(){
            if(this.etype === null){
                alert("No encryption type was selected for this operation.");
            }else{
                if(this.etype === "encrypt"){
                    this.encryptRSA();
                }else if(this.etype === "decrypt"){
                    this.decryptRSA();
                }
            }
        },
    }
}
</script>

<style scoped>

</style>