<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment (without mapMutations)</button>
        <button class="btn btn-primary" @click="decrement">Decrement (without mapMutations)</button>
    </div>
</template>

<script>
    export default {
        methods: {
            // Voir counter pour utilisation des mutations
            increment() {
                this.$store.state.counter++;
                // this.$emit('updated', 1);
            },
            decrement() {
                this.$store.state.counter--;
                // this.$emit('updated', -1);
            }
        }
    }
</script>