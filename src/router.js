import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";
import StudentsPage from "./components/student/StudentsPage.vue"
import NotFound from './components/NotFound.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        { path: '/', redirect: 'login'},
        {path: "/login",component: LoginPage},
        {path: "/home",component: HomePage},
        {path: "/students",component: StudentsPage},
        { path:'/:notFound(.*)', component: NotFound }
        
    ]
});

export default router;
