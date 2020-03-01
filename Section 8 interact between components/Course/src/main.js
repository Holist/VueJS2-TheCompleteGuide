import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  // Important : On peut utiliser cette instance pour centraliser des datas, methodes, accessibles dans tout les compos, du moment qu'ils sont importés
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
