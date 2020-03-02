import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
// Pour importer une constante d'un fichier (le fichier de routes ici :)
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  // Le mode history permet de ne pas utiliser le hash dans la bare de navigation
  mode: 'history',
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
