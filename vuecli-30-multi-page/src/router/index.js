import Vue from 'vue'
import Router from 'vue-router'
import indexRouter from './index/index'

Vue.use(Router)

const routes = [
    indexRouter
]

export default new Router({
    mode: 'history',
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})
