import { createRouter, createWebHashHistory } from 'vue-router'
import Columnar from '../views/Columnar.vue'
import Monoalphabetic from '../views/Monoalphabetic.vue'
import Polyalphabetic from '../views/Polyalphabetic.vue'
import RSA from '../views/RSA.vue'
import Vernam from '../views/Vernam.vue'
import Vigenere from '../views/Vigenere.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/columnar',
    name: 'Columnar',
    component: Columnar
  },
  {
    path: '/monoalphabetic',
    name: 'Monoalphabetic',
    component: Monoalphabetic
  },
  {
    path: '/polyalphabetic',
    name: 'Polyalphabetic',
    component: Polyalphabetic
  },
  {
    path: '/rsa',
    name: 'RSA',
    component: RSA
  },
  {
    path: '/vernam',
    name: 'Vernam',
    component: Vernam
  },
  {
    path: '/vigenere',
    name: 'vigenere',
    component: Vigenere
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
