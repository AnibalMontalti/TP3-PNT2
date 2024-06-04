import { createRouter, createWebHistory } from "vue-router";
import Formulario from "./components/Formulario.vue";

const routes = [
    {path: '/', component: Formulario},
    {path: '/formulario', component: Formulario},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router