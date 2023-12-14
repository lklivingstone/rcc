import { createApp } from 'vue'
// import Router from 'vue-router'
import App from './App.vue'
import Home from './pages/home/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'; // Correct import statements

const routes = [
    { path: '/', component: Home },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

createApp(App)
.use(router)
.mount('#app')
