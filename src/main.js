import { createApp } from 'vue'
// import Router from 'vue-router'
import App from './App.vue';
import Home from './pages/home/Home.vue';
import Company from './pages/company/Company.vue';
import Services from './pages/services/Services.vue';
import Clients from './pages/clients/Clients.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', component: Home },
    { path: '/company', component: Company },
    { path: '/services', component: Services },
    { path: '/clients', component: Clients },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

createApp(App)
.use(router)
.mount('#app')
