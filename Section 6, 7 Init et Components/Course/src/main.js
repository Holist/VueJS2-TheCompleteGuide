import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// Enregistrement d'un composant GLOBAL :
Vue.component('app-servers', Home);

new Vue({
  // Selector du index.html
  el: '#app',
  // Cette fonction dit à Vue JS de rendre le <template> importé à la ligne 2 du ficher app.vue
  render: h => h(App)
})
