import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [{
      path: 'Home',
      name: '驾驶舱大屏',
      component: () => import('@/views/home/index'),
      meta: { title: '驾驶舱大屏', icon: 'dashboard' }
    }]
  },

  {
    path: '/market',
    component: Layout,
    // redirect: '/example/table',
    // name: '市场营销',
    // meta: { title: '市场营销', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'market',
        name: '市场营销',
        component: () => import('@/views/market/index'),
        meta: { title: '市场营销', icon: 'table' }
      }/*,
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }*/
    ]
  },

  {
    path: '/complaint',
    component: Layout,
    children: [
      {
        path: 'complaint',
        name: '投诉处理',
        component: () => import('@/views/complaint/index'),
        meta: { title: '投诉处理', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    // redirect: '/nested/menu1',
    // name: '覆盖可视化',
    // meta: { title: '覆盖可视化', icon: 'nested' },
    children: [
      /* {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },*/
      {
        path: 'visualized',
        component: () => import('@/views/visualized/index'),
        name: '覆盖可视化',
        meta: { title: '覆盖可视化', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/netOpt',
    component: Layout,
    children: [
      {
        path: 'netOpt',
        name: '网优支撑',
        component: () => import('@/views/netOpt/index'),
        meta: { title: '网优支撑', icon: 'form' }
      }
    ]
  },

  {
    path: '/data',
    component: Layout,
    children: [
      {
        path: 'data',
        name: '数据维护',
        component: () => import('@/views/data/index'),
        meta: { title: '数据维护', icon: 'form' }
      }
    ]
  }, /*,
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  }*/

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
