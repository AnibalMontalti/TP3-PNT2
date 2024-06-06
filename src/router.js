import { createRouter, createWebHistory } from "vue-router";
import Formulario from "./components/Formulario.vue";
import Api from "./components/Api.vue";

const routes = [
    {path: '/', component: Formulario},
    {path: '/formulario', component: Formulario},
    {path: '/api', component: Api},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router