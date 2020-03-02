<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment with mapActions</button>
        <button class="btn btn-primary" @click="decrement">Decrement with mapActions</button>
        <hr>
        <button class="btn btn-primary" @click="asyncIncrement">AsyncIncrement with mapActions</button>
        <hr>
        <button class="btn btn-primary" @click="decrementWithArgs(100)">Decrement with Args and mapActions</button>
        <!-- Objet en properties pour l'action : -->
        <button class="btn btn-primary" @click="asyncDecrement({by: 100, duration: 1000})">AsyncDecrement with multiple Args and mapActions</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        methods: {
            ...mapActions({
                increment: 'increment',
                decrement: 'decrement',
                asyncDecrement: 'asyncDecrement',
                asyncIncrement: 'asyncIncrement',
                decrementWithArgs: 'decrementWithArgs',
            }),
            // increment() {
            //     // with mutations : this.$store.commit('increment')
            //     // without mutations : this.$store.state.counter++;
            //     // without Vuex : this.$emit('updated', 1);
            // },
            // decrement() {
            //     this.$store.commit('decrement')
            // }
        }
    }
</script>