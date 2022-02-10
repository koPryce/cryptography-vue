<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <nav>
    <ul>
      <li><router-link to="/columnar">Columnar</router-link></li>
      <li><router-link to="/monoalphabetic">Monoalphabetic</router-link></li>
      <li><router-link to="/polyalphabetic">Polyalphabetic</router-link></li>
      <li><router-link to="/rsa">RSA</router-link></li>
      <li><router-link to="/vernam">Vernam</router-link></li> 
      <li><router-link to="/vigenere">Vigenere</router-link></li>
    </ul>
  </nav>
  <section class="container">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
