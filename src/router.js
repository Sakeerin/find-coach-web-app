import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from './pages/coaches/CoachesDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachesRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from "./pages/auth/UserAuth.vue";

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
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/auth', component: UserAuth },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;