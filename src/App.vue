<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <nav id="nav">
    <ul>
      <li><router-link to="/columnar">Columnar</router-link></li>
      <li><router-link to="/monoalphabetic">Monoalphabetic</router-link></li>
      <li><router-link to="/polyalphabetic">Polyalphabetic</router-link></li>
      <li><router-link to="/rsa">RSA</router-link></li>
      <li><router-link to="/vernam">Vernam</router-link></li> 
      <li><router-link to="/vigenere">Vigenere</router-link></li>
    </ul>
  </nav>
  <section class="content">
    <router-view></router-view>
    <Footer/>
  </section>
</template>

<script>
import Footer from './components/Footer.vue'
import Columnar from './views/Columnar.vue'
import Monoalphabetic from './views/Monoalphabetic.vue'
import Polyalphabetic from './views/Polyalphabetic.vue'
import RSA from './views/RSA.vue'
import Vernam from './views/Vernam.vue'
import Vigenere from './views/Vigenere.vue'

export default {
  components: {
    Columnar,
    Monoalphabetic,
    Polyalphabetic,
    RSA,
    Vernam,
    Vigenere,
    Footer
  },
}
</script>

<style>
*, *::before, *::after{
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2cdd26;
  background:black;
  border: 10px black solid;
  border-radius: 15px;
}

#nav ul{
  list-style: none;
  display: flex;
  flex: 0 0 200px;
  width: 100%;
  justify-content:space-around;
}

.content{
  margin: 0 1rem;
  text-align: center;
}

#answer{
    resize: none;
}

.etype, .text, .key{
        display:flex;
        justify-content: center;
        gap: 1rem;
        margin: 1rem;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
   -moz-appearance: textfield;
}
</style>
