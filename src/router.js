import { createRouter, createWebHistory } from 'vue-router'

//This is how the router will navigate the user
import HomePage from '@/views/HomePage.vue'
import CardDetail from './views/CardDetail.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'

//passing in isAuthenticated variable
import { useAuth } from './composables/useAuth'
const { isAuthenticated } = useAuth()

const routes = [
  { path: '/project5/', name: 'Home', component: HomePage },
  { path: '/project5/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/project5/employees/:id', name: 'CardDetail', component: CardDetail },
  { path: '/project5/login', name: 'LoginPage', component: LoginPage },
  { path: '/project5/settings', name: 'SettingsPage', component: SettingsPage, meta:{requiresAuth: true}},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//navigation guard --Checks if user is signed in before each navigation
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({name: 'LoginPage', query:{redirect: to.fullPath}})
  } else {
    next()
  }
})
export default router
