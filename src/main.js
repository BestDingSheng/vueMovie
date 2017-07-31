// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/rest.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/css/common.scss'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

Vue.use(MintUI)
Vue.use(VueLazyLoad, {
  loading: './common/img/loading.gif'
});
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  directives: {infiniteScroll}
})
