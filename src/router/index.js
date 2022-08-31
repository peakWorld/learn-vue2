import Vue from 'vue';
import VueRouter from 'vue-router';

import hook from './hook';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    redirect: '/hello-world'
  },
  {
    path: '/hello-world',
    name: 'hello-world',
    component: () => import('@/views/hello-world/index.vue'),
    children: [ // 指定相同的webpackChunkName, 将lifecycles和bindData打包到一起
      {
        name: "lifecycles",
        path: "lifecycles",
        component: () => import(/* webpackChunkName: "base" */ '@/components/Lifecycles.vue'), 
      },
      {
        name: "bindData",
        path: "bind-data",
        component: () => import(/* webpackChunkName: "base" */ '@/components/BindData.vue')
      },
      {
        name: "child",
        path: "child",
        component: () => import('@/components/child/index.vue')
      },
      {
        name: "animation",
        path: "animation",
        component: () => import('@/components/Animation.vue')
      }
    ]
  },
  {
    path: '/data-vuex',
    name: 'data-vuex',
    component: () => import('@/views/data-vuex/index.vue'),
  },
];

export const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes,
});

hook(router);
