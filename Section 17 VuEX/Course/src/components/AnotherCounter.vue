<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment with mapMutations</button>
        <button class="btn btn-primary" @click="decrement">Decrement with mapMutations</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        methods: {
            // Comme mapGetters, mapMutations évite de recréer des fonctions de commit à la pelle pointant vers les mutations
            ...mapMutations({
                increment: 'increment',
                decrement: 'decrement',
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