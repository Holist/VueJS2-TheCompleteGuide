new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            myAlert() {
                alert("Alert");
            },
            storeValue(event) {
                this.value = event.target.value;
            },
        }
    });