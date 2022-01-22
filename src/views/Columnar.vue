<template>
    <Header heading="Columnar Cipher"/>

    <h3>Encrypt/Decrypt</h3>

    <input type="radio" name="etype" id="encrypt" value="encrypt" v-model="etype">
    <label for="encrypt">Encrypt</label>

    <input type="radio" name="etype" id="decrypt" value="decrypt" v-model="etype">
    <label for="decrypt">Decrypt</label>

    <label for="text">plainText/cipherText</label>
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
                
                this.key = this.key.replace(/this.key.charAt(min_idx)/gi, this.key.charAt(min_idx).toLowerCase());

                // var temp = new Array(this.key.length);
                // temp = Array.from(this.key);
                // temp[min_idx] = temp[min_idx].toLowerCase();
                // this.key = temp.toString();
                
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