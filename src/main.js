import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTypedJs from "vue-typed-js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

AOS.init();

Vue.config.productionTip = false
Vue.use(VueTypedJs);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
