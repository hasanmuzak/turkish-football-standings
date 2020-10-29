import Vue from 'vue'
import App from './App.vue'
import AtComponents from 'at-ui'
import 'at-ui-style'    // Import CSS
import axios from 'axios';

// import 'at-ui-style/src/index.scss'      // Or import the unbuilt version of SCSS
window.axios = axios;
axios.defaults.baseURL = 'http://localhost:3000/api'
Vue.use(AtComponents)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
