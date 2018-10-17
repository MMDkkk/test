import Vue from 'vue'
import Router from 'vue-router'

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: resolve => require([(`../pages/${file}.vue`)], resolve)
  }
}

Vue.use(Router)

const router = new Router({
  base: __dirname,
  mode: 'hash',
  scrollBehavior: () => ({y: 0}),
  routes: [
    route('/login', 'Login', 'login'),
    route('/error', 'Error', 'error'),
    route('/index', 'Index', 'index')
  ]
})

// router.beforeEach((to, from, next) => {
//   global.store.dispatch('checkPageTitle', to.path)
//   if (typeof ga !== 'undefined') {
//     window.ga('set', 'page', to.path)
//     window.ga('send', 'pageview')
//   }
//   next()
// })

export default router
