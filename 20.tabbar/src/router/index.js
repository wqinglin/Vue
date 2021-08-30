import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home');
const Category = () => import('../views/category/category');
const Cartshop = () => import('../views/cartshop/cartshop');
const Profile = () => import('../views/profile/profile');

// const Home = function() {
//     import('../views/home/home');
// }

Vue.use(VueRouter)


const routes =[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cartshop',
        component:Cartshop
    },
    {
        path:'/profile',
        component:Profile
    },

];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
