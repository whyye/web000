import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path: '/category/create',
        name: 'category-create',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/categoryCreate.vue')
      },
      {
        path: '/category/list',
        name: 'category-list',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/categoryList.vue')
      },
      {
        path: '/category/:id/edit',
        name: 'category-edit',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/editCategory.vue')
      }
    ]
  }

  // {
  //   path: '/category/create',
  //   name: 'category-create',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/categoryCreate.vue')
  // },

]

const router = new VueRouter({
  routes
})

export default router
