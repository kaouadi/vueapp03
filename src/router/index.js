import Vue from "vue";
import Router from "vue-router"
import About from "@/components/About"
import Home from "@/components/Home"
import ViewProfile from "@/components/ViewProfile";

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes:[
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
            path: '/profile/:user_id',
            name: 'ViewProfile',
            component: ViewProfile
        }

    ]

})