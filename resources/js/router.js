import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {path: '/', component: () => import('./views/Index.vue')},
    {path: '/posts', component: () => import('./views/Blog.vue')},
    {path: '/posts/create', component: () => import('./views/CreatePost.vue')},
    {path: '/posts/:id', component: () => import('./views/Post.vue')},
    {path: '/posts/:id/edit', component: () => import('./views/UpdatePost.vue')},
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})
