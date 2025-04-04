// import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// import CoachDetail from './pages/coaches/CoachesDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachRegistration from './pages/coaches/CoachesRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
// import UserAuth from "./pages/auth/UserAuth.vue";
import store from './store/index.js';

const CoachDetail = () => import('./pages/coaches/CoachesDetail.vue');
const CoachRegistration = () => import('./pages/coaches/CoachesRegistration.vue');
const ContactCoach = () => import('./pages/requests/ContactCoach.vue');
const RequestReceived = () => import('./pages/requests/RequestsReceived.vue');
const UserAuth = () => import('./pages/auth/UserAuth.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        { path: '/coaches/:id', 
            component: CoachDetail, 
            props: true, 
            children: [
                { path: 'contact', component: ContactCoach } // coaches/id/contact
            ],
        },    
        { path: '/register', component: CoachRegistration, meta: { requiresAuth: true } },
        { path: '/requests', component: RequestReceived, meta: { requiresAuth: true } },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

router.beforeEach(function(to, _, next) {
    if(to.meta.requiresAuth && !store.getters.isAuthenticated){
        next('/auth');
    }else if(to.meta.requiresUnauth && store.getters.isAuthenticated){
        next('/coaches');
    }else{
        next();
    }
});

export default router;