import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AddNoteView from '../views/AddNoteView.vue'
import NoteDetailView from '../views/NoteDetailView.vue'
import { isAuthenticated } from '@/services/auth'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },  
  {
    path: '/add-note',
    name: 'add-note',
    component: AddNoteView,
    meta: { requiresAuth: true }
  },
  {
    path: '/note/:noteId',
    name: 'note-detail',
    component: NoteDetailView,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isAuthenticated()) {
        console.log(!isAuthenticated())
          next('/login');
      } else {
        console.log(!isAuthenticated())
          next();
      }
  } else {
      next();
  }
});


export default router
