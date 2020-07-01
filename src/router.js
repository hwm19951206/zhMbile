import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login.vue'
import Index from '../src/view/index.vue'
import Todos from '../src/view/PJmanger/todos.vue'
// import PJmanager from '../src/components/PJmanager'
import My from '../src/view/PJmanger/my'


Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'Index',
        component: Index,
        redirect:'/my',
        children:[
            {
                path:'/my',
                name:'My',
                component:My
            },
            {
                path: '/todos',
                name: 'Todos',
                component: Todos
            }
        ]
    },

]
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
router.beforeEach((to, from, next) => {
    const userName=localStorage.getItem('username')
    if(userName||to.name==='Login'){
        next()
    }else{
        console.log(to.path)
        next({
            name:'Login',
        })
    }
})
export default router
