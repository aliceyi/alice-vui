import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routers = []

const routersContext = require.context('./', true, /index\.js$/)
routersContext.keys().forEach(router => {
  if (router.startsWith('./index')) return false
  const routerMoudel = routersContext(router)
  routers = [...routers, ...(routerMoudel.default || routerMoudel)]
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers
})
