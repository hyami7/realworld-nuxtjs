import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _089c11ab = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _0997b7a0 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _299784c8 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _0a1f7970 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _174f9338 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _06659024 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _3c8af2d6 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _089c11ab,
    children: [{
      path: "",
      component: _0997b7a0,
      name: "home"
    }, {
      path: "/login",
      component: _299784c8,
      name: "login"
    }, {
      path: "/register",
      component: _299784c8,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _0a1f7970,
      name: "profile"
    }, {
      path: "/settings",
      component: _174f9338,
      name: "settings"
    }, {
      path: "/editor",
      component: _06659024,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _3c8af2d6,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
