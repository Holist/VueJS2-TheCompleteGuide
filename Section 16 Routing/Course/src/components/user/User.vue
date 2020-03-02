<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Navigate to Home via methods/JS</button>
        <hr>
        <!-- Attention à l'emplacement de router-view -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // OLD Methode : accéder aux params de la route, comme l'id :
            // id: this.$route.params.id

        }
    },
    // OLD Methode :
    // Attention, le composant User n'est pas rechargé en changeant de page, l'id en mémoire ne changera pas
    // pour cela on va utiliser un watcher qui modifiera la data id si changement :
    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id;
    //     }
    // },
    methods: {
        navigateToHome() {
            // lien direct :
            // this.$router.push('/');
            // Avec un objet :
            // this.$router.push({path: '/'});
            // Avec un raccourci name (précisé dans le fichier route)
            this.$router.push({name: 'home'});
        }
    },
    // Définir les params desrotues via des props ! Vue 2.2
    // props: {
    //     id: {
    //         type: String,
    //     }
    // },
}
</script>