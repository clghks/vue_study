import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HackerNewsList from '@/components/HackerNewsList'
import UseWithFilter from '@/components/UseWithFilter'
import TriggerManually from '@/components/TriggerManually'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HackerNewsList',
      name: 'HackerNewsList',
      component: HackerNewsList
    },
    {
      path: '/UseWithFilter',
      name: 'UseWithFilter',
      component: UseWithFilter
    },
    {
      path: '/TriggerManually',
      name: 'TriggerManually',
      component: TriggerManually
    }
  ]
})
