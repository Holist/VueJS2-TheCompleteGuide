<template>
    <p>Counter is (without mapGetters): {{ counter }}</p>
</template>

<script>
    export default {
        // Voir AnotherResult pour l'utilisation et le mappage des getters
        // props: ['counter']
        // Bye bye les props et les emit..
        // On accéde au magasin de donnée comme ca :
        computed: {
            counter() {
                // On utilise les getters pour les calculs sur les data :
                return this.$store.getters.doubleCounter;
                // return this.$store.state.counter *2;
            }
        },
    }
</script>