<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- <app-result :counter="counter"></app-result> -->
                <app-result></app-result>
                <app-counter></app-counter>
                <hr>
                <!-- <app-counter @updated="counter += $event"></app-counter> -->
                <app-another-result></app-another-result>
                <app-another-counter></app-another-counter>
                <hr>
                <app-action-counter></app-action-counter>
                <hr>
                <input type="text" :value="value" @input="updateValue">
                <p> {{ value }}</p>
                <hr>
                <p>Avec V model :</p>
                <input type="text" v-model="value">
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import ActionCounter from './components/ActionCounter.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter,
            appActionCounter: ActionCounter,
        },
        // Pour pouvoir lire et mettre à jour la data via l'input :
        computed: {
            value() {
                return this.$store.getters.value;
            }
        },
        methods: {
            updateValue(event) {
                this.$store.dispatch('updateValue', event.target.value);
            }
        },
        // Alternative pour l'utilisation de v-model directement :
        computed: {
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    this.$store.dispatch('updateValue', value);
                }
            }
        }
    }
</script>

