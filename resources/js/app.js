require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.use(VueRouter, Axios);

import App from './components/App.vue'
import Read from './components/Read.vue'
import Create from './components/Create.vue'
import Update from './components/Update.vue'

const routes = [
    {
        path : '/',
        name : 'Read',
        component : Read
    },
    {
        path : '/create',
        name : 'Create',
        component : Create
    },
    {
        path : '/update/:id',
        name : 'Update',
        component : Update
    },
]

const router = new VueRouter({mode:'history', routes:routes})
new Vue(Vue.util.extend({router}, App)).$mount('#app')