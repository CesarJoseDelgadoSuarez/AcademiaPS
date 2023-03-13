import * as VueRouter from 'vue-router'; 
import Home from './views/Home.vue'
import Login from './views/Login.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
