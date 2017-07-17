//Official component
import Vue from 'vue'
import Router from 'vue-router'

/*
Font Awesome
https://justineo.github.io/vue-awesome/demo/
 */
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

//User-defined components
import Index from '@/pages/index'

//Global configuration
Vue.use(Router)
Vue.component('icon', Icon)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
