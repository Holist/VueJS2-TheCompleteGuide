<template>
<div>
    <p>Counter is: {{ counter }}</p>
    <p>Number of Clicks : {{ clicks }}</p>
    <p>Number of Clicks with my computed (and mapGetters) : {{ myown }}</p>
</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        // props: ['counter']
        computed: 
            // mapGetters permet d'accéder directement aux getters (on peut changer les noms)
            // plutot que de recréer toutes les fonctions qui accédent au store comme en bas
            // Syntaxe particuliére ES6 ... pour pouvoir utiliser également nos propres computed :
            // necessite npm install --save-dev babel-preset-stage-2
            // puis ajouter dans le fichier babelrc:
                // ["es2015", { "modules": false }],
                // ["stage-2"]
            {
            ...mapGetters({
                counter: 'doubleCounter',
                clicks: 'stringCounter',
            }),
            myown() {
                return this.$store.getters.doubleCounter;

            }
        }

            // counter() {
            //     return this.$store.getters.doubleCounter;
            // },
            // clicks() {
            //     return this.$store.getters.stringCounter;
            // },
    }
</script>