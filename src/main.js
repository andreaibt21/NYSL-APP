import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBhn36a2lyrW3NShlxix3VGnKmE24eY5zg",
  authDomain: "ny-soccerleague.firebaseapp.com",
  databaseURL: "https://ny-soccerleague.firebaseio.com",
  projectId: "ny-soccerleague",
  storageBucket: "ny-soccerleague.appspot.com",
  messagingSenderId: "1002605789003",
  appId: "1:1002605789003:web:44dff9d3c21cd47559f2ce"
};
firebase.initializeApp(firebaseConfig)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
