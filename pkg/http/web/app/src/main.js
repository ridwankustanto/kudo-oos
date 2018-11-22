import Vue from 'vue'
import './plugins/vuetify'
import App from './components/App.vue'
import router from './routes';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
