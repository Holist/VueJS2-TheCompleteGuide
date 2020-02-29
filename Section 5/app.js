var data = {
    title: 'The VueJS Instance',
    showParagraph: false
  }
// Une instance sur un element (id), il faut donc passer par des composants avant l'initialisation des instances de vue
// Ils seront accessible dans toutes les instances de vue
// la propriété template est limité, une seule string
Vue.component('hello', {
  template: '<h1>Hello! Je suis un composant</h1>'
});

  var vm1 = new Vue({
    data: data,
    methods: {
      show() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
        // On peut accéder aux ref de notre DOM (propriété d'un élément: ref="") avec $refs, accessible en dehors de l'instance également !!
        // Attention, cela modifie le DOM directement, et pas le template virtuel de Vue.js (rechargement : retour arriére possible)
        // Interessant pour RECUPERER des informations ;)
        this.$refs.myButton.innerText = 'Test';
      },
      updateTitle(title) {
        this.title = title;
      }
    },
    computed: {
      lowercaseTitle() {
        return this.title.toLowerCase();
      }
    },
    watch: {
      title(value) {
        alert('Title changed, new value: ' + value);
      }
    }
  });
  
  // Pour monter une instance de vue sur un élément $el, ex on créé l'instance mais l'élément cible du template n'existe pas encore...
  vm1.$mount('#app1');
  // ------------------------------------------------
  // On ne peut pas ajouter de "data" aprés la création de l'instance, cela ne fonctionnera pas comme une data :
  vm1.newProp = "New!"

  // la propriété vm1.$data correspond à l'objet data de l'isntance de vue, permet d'y accéder de l'extérieur
  console.log(vm1.$data === data);
  // vm1.$refs.heading.innerText = 'Something else';
  
  // On accéde à la vm1 pour changer son titre via un timer et relancer la methode show() :
  setTimeout(function() {
    vm1.title = 'Changed by Timer';
     // En appelant la methode show le title sera ....updated et pas Changed by timer et le watcher se declenchera à la fin de cette fonction timer
    vm1.show();
  }, 3000);
  
  var vm2 = new Vue({
    el: '#app2',
    data: {
      title: 'The second Instance, test lifecycle'
    },
    // <!-- Instance Lifecycle, on a des methodes permettant d'accéder aux différentes étapes de la vie de l'instance : -->
    // <!-- beforeCreate() created() beforeMount() mounted() beforeUpdate() updated() beforeDestroy() -->
    beforeCreate() {
      console.log('beforeCreate()');
    },
    created() {
      console.log('created()');
    },
    beforeMount() {
      console.log('beforeMount()');
    },
    mounted() {
      console.log('mounted()')
    },
    beforeUpdate() {
      console.log('beforeUpdate()');
    },
    updated() {
      console.log('updated()');
    },
    beforeDestroy() {
      console.log('beforeDestroy()');
    },
    destroyed() {
      console.log('destroyed()');
    },
    methods: {
      onChange: function() {
        // On accéde à la vm1 pour changer son titre :
        vm1.title = 'Changed!';
      },
      destroy(){
        this.$destroy();
      }
    }
  });
  
  // template, propriété pour spécifier le template dans l'instance
  var vm3 = new Vue({
      template: '<h1>Hello!</h1>'
  });
  // On peut monter l'élément avec du js vanilla
  vm3.$mount();
  document.getElementById('app3').appendChild(vm3.$el);
