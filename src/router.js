import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound';
import PostsList from './pages/PostsList';
import PostDetail from './pages/PostDetail';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/posts'},
        {path: '/posts', component: PostsList},
        {path: '/posts/:id', component: PostDetail, props: true},
        {path: '/:notFound(.*)', component: NotFound},
    ]
});

export default router;