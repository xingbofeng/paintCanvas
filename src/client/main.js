// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(MuseUI);
Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
