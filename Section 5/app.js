var data = {
    title: 'The VueJS Instance',
    showParagraph: false
  }
  
  var vm1 = new Vue({
    data: data,
    methods: {
      show() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
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
  
  vm1.$mount('#app1');
  // ------------------------------------------------
  // On ne peut pas ajouter de "data" aprés la création de l'instance, cela ne fonctionnera pas comme une data :
  vm1.newProp = "New!"

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
      title: 'The second Instance'
    },
    methods: {
      onChange: function() {
        // On accéde à la vm1 pour changer son titre :
        vm1.title = 'Changed!';
      }
    }
  });
  
  var vm3 = new Vue({
      template: '<h1>Hello!</h1>'
  });
  
  vm3.$mount();
  document.getElementById('app3').appendChild(vm3.$el);
  