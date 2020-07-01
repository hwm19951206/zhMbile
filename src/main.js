import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import reset  from '../src/assets/css/reset.css'
import 'vant/lib/index.less'
import axios from 'axios'
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import Login from './Login.vue'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);

Vue.prototype.axios = axios

Vue.prototype.material = 'http://192.168.123.121:8880',

Vue.prototype.uc = 'http://192.168.123.121:8088',

Vue.config.productionTip = false
var user = localStorage.getItem('username')
console.log(user)
new Vue({
  router,
  store,
  reset,
  render:function (h) {
    return h(App)
  }
}).$mount('#app')
