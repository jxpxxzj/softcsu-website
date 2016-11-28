import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import navbar from './components/navbar.vue';
import cfooter from './components/cfooter.vue';
import acard from './components/acard.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)

Vue.component('navbar',navbar);
Vue.component('cfooter',cfooter);
Vue.component('acard',acard);


var router = new VueRouter({
  routes: require('./routes')
});

var App = new Vue({
  router,
  computed: {
    marginClass: function () {
      return {
        'tiny-footer': this.$route.path != '/',
        'huge-footer': this.$route.path == '/'
      }
    }
  }
}).$mount('#app');
