import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexFormulario from './components/IndexFormulario.vue'
import Inicio from './components/Inicio.vue'
import Usuarios from './components/Usuarios.vue'
Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/inicio' },
        { path: '/inicio', component:Inicio },
        { path: '/formulario', component:IndexFormulario },
        { path: '/usuarios', component:Usuarios },
    ]
})