import { createApp } from 'vue'
// import Router from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import Home from './pages/home/Home.vue';
import Company from './pages/company/Company.vue';
import Services from './pages/services/Services.vue';
import Clients from './pages/clients/Clients.vue';
import Projects from './pages/projects/Projects.vue'
import ContactUs from './pages/contactUs/ContactUs.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/company', component: Company },
    { path: '/services', component: Services },
    { path: '/clients', component: Clients },
    { path: '/projects', component: Projects },
    { path: '/contactus', component: ContactUs },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App)
.use(router)
.mount('#app')
