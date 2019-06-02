import Vue from 'vue'
import App from './App'

import obe from './pages/obe/home.vue'
Vue.component('obe',obe)

import check from './pages/login/check.vue'
Vue.component('check',check)

import person from './pages/bottom-nav/person/person.vue'
Vue.component('person',person)

import pick from './pages/obe/pick.vue'
Vue.component('pick',pick)


import components from './pages/component/home.vue'
Vue.component('components',components)


import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()





