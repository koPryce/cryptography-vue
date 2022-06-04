<template>
    <Header heading="Columnar Cipher"/>
    <section class="container">
        <section class="etype">
            <h3>Encrypt/Decrypt</h3>

            <input type="radio" name="etype" id="encrypt" value="encrypt" v-model="etype">
            <label for="encrypt">Encrypt</label>

            <input type="radio" name="etype" id="decrypt" value="decrypt" v-model="etype">
            <label for="decrypt">Decrypt</label>
        </section>

        <section class="text">
            <label for="text">PlainText/CipherText</label>
            <input type="text" name="text" id="text" v-model.trim="text">
        </section>

        <section class="key">
            <label for="key">Key</label>
            <input type="text" name="key" id="key" v-model.trim="key">
        </section>

        <section class="answer">
            <textarea name="answer" id="answer" cols="30" rows="10" v-model="ans" readonly></textarea>
        </section>

        <section class="btns">
            <Button @click="performAction" color="#9897A9" label="Go"/> 
            <Button @click="clearContent" color="#232023" label="Redo"/> 
        </section>
    </section>
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
            etype: null,
            cipherText: "",
            plainText: "",
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
            var row, col, textPos = 0;
            col = this.key.length;
            row = Math.ceil(this.plainText.length/col);
            var min_idx;
            
            if(col == this.plainText.length) {
                this.cipherText = "Error: Length of the key and plainText are equal.";
                this.ans = this.cipherText;
                return;
            }

            if(this.plainText.length % col >= 1) {
                row += 1;
            }
            
            let grid = new Array(row);

            for(let x = 0; x < col; x++) {
                grid[x] = new Array(col);
            }

            
            for(let i = 0; i < col; i++) {
                grid[0][i] = this.key.charAt(i);
            }
            
            for(let i = 1; i < row; i++) {
                for(let j = 0; j < col; j++) {
                    if(textPos == this.plainText.length) {
                        break;
                    }
                    grid[i][j] = this.plainText.charAt(textPos);
                    textPos++;
                }
            }
            
            while(col > 0) {
                min_idx = 0;
                for(let j = 1; j < col; j++) {
                    if(grid[0][j].charCodeAt(0) < grid[0][min_idx].charCodeAt(0)) {
                        min_idx = j;
                    }
                }
                
                for(let k = 1; k < row; k++) {
                    if(grid[k][min_idx] == null) {
                        break;
                    }
                    this.cipherText+= grid[k][min_idx];
                }
                
                for(let t = min_idx; t < col-1; t++) {
                    for(let r = 0; r < row; r++) {
                        grid[r][t] = grid[r][t+1];					
                    }
                }
                col--;
            }
            this.ans = this.cipherText; 
        },
        decryptText(){
            this.plainText = "";
            var row, col, textPos = 0;
            col = this.key.length;
            row =  Math.ceil(this.cipherText.length/col);
            var min_idx;
            var excess = [];

            if(col == this.cipherText.length) {
                this.plainText = "Error: Length of the key and plainText are equal.";
                this.ans = this.plainText;
                return;
            }
            
            if(this.cipherText.length % col >= 1) {
                row += 1;
            }
            
           let grid = new Array(row);
            
            for(let i = 0; i < col; i++) {
                grid[i] = new Array(col);
            }

            for(let i = 0; i < col; i++) {
                grid[0][i] = this.key.charAt(i);
            }
            
            var excessKey = this.cipherText.length % col;
            for(let i = 0; i < excessKey; i++) {
                excess.push(true);
            }

            for(let i = excessKey; i < this.key.length; i++) {
                excess.push(false);
            }
            
            while(textPos != this.cipherText.length) {
                min_idx = 0;
                for(let j = 1; j < col; j++) {
                    if(this.key.charAt(j).charCodeAt(0) < this.key.charAt(min_idx).charCodeAt(0)) {
                            min_idx = j;
                        }
                }

                const tempArray = this.key.split("");
                let key = this.key.charAt(min_idx);
                const newTempArray = tempArray.map(letter => (letter === key) ? letter = letter.toLowerCase(): letter);

                this.key = "";
                for(let i of newTempArray) {
                    this.key += i;
                }
                
                if(excess[min_idx]) {
                    for(let k = 1; k < row; k++) {
                        if(textPos == this.cipherText.length) {
                            break;
                        }
                        grid[k][min_idx] = this.cipherText.charAt(textPos);
                        textPos++;
                    }
                }else {
                    for(let k = 1; k < row-1;k++) {
                        if(textPos == this.cipherText.length) {
                            break;
                        }
                        grid[k][min_idx] = this.cipherText.charAt(textPos);
                        textPos++;
                    }
                }
            }
            for(let i = 1; i < row; i++) {
                for(let j = 0; j < col; j++) {
                    if(grid[i][j] == null){
                        break;
                    }
                    this.plainText += grid[i][j];
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
        }
    }
}
</script>

<style scoped>
</style>