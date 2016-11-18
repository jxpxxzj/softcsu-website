import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import navbar from './components/navbar.vue';
import footer from './components/cfooter.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)
Vue.config.debug = true;

Vue.component('navbar',navbar);
Vue.component('cfooter',footer);

var router = new VueRouter({
  routes: require('./routes')
});

var App = new Vue({
  router
}).$mount('#app');
