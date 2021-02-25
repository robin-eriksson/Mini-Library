import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from '../views/BookList.vue'
import BookInfo from '../views/BookInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books/:id',
    name: 'BookInfo',
    component: BookInfo
  },
  {
    path: '/',
    name: 'BookList',
    component: BookList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
