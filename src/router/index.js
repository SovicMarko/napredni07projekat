import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shoppingcart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
    // /product/pera
    // /product/joca
    // /product/234324
  }
]

const router = new VueRouter({
  routes
})

export default router
