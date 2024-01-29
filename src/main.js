import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Income',
        component: () => import('@/components/views/IncomeView.vue'),
        props: true
    },
    {
        path: '/godNoILostMyMoney',
        name: 'Purchases',
        component: () => import('@/components/views/PurchasesView.vue'),
        props: true
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('@/components/views/StatisticsView.vue'),
        props: true
    },
]
})

const app = createApp(App)
.use(router)
.mount('#app')
