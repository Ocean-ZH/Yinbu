import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myFunction from './myFunction.js'

/* import plainPage from '@/components/plainPage/index.js'
Vue.use(plainPage); */

Vue.config.productionTip = false

Vue.prototype.myFunction = myFunction;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
