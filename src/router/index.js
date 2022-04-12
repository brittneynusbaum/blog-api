import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import BlogPosts from '../views/BlogPosts.vue';
import ContactPage from '../views/ContactPage.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import LogOut from '../views/LogOut.vue'
import PostsIndex from '../views/PostsIndex.vue'
import PostsNew from '../views/PostsNew.vue'
import PostsShow from '../views/PostsShow.vue'
import PostsEdit from '../views/PostsEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    component: PostsIndex
  },
  {
    path: '/blogposts',
    component: BlogPosts
  },
  {
    path: '/posts-new',
    component: PostsNew
  },
  {
    path: '/posts/:id',
    component: PostsShow
  },
  {
    path: '/posts/:id/edit',
    component: PostsEdit
  },
  {
    path: '/contact',
    component: ContactPage
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/login',
    component: LogIn
  },
  {
    path: '/logout',
    component: LogOut
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
