new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result() {
                return this.value == 37 ? "You did it" : "Not yet"
            }
        },
        watch: {
            result() {
                var vm = this;
                setTimeout(function() {
                    vm.value = 0;
                }, 5000);
            }
        },
    });