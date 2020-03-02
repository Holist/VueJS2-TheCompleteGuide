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
  // Comportement de scrolling, possibilité de se placer quelque part pour toutes les pages ou utiliser les #
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {x: 0, y: 700};
  }
});

// Security Checks : Autorisation au niveau du routage :

router.beforeEach((to, from, next) => {
  console.log('global beforeeach)');
  // Next Pour continuer (ou pas ou vers une autre route...) 
  next();
  // next(false);
  // next('/');
  // next({ object });
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
