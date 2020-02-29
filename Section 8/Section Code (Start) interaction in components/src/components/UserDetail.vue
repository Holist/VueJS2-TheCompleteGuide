<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>
        <p>User Age: {{ userAge }}</p>
        <p>Switched Name: {{ switchName() }}</p>
        <button @click="resetName()">Reset the Name</button>
        <!-- Ce bouton lancera la fonction resetName du parent in fine -->
        <button @click="resetFn()">Reset the Name with parent fn</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    // Récupére la pté du parent User.vue qui a été passée avec ":myName" (et validations des props):
    props: {
        myName:  {
            // Le type peut etre array, boolean, object, function...
            type: String,
            required: true,
            // Si objet en type il faudra passer un objet pour default bien sur
            default: "TOTO",
        },
        resetFn: Function,
        userAge: Number,
    },
    // On peut trés bien réutiliser la propriété et travailler dessus 
    methods: {
        switchName() {
            return this.myName.split("").reverse("").join("");
        },
        resetName() {
            // myName change, on veut informer le composant parent
            this.myName = "Romain";
            // Emet un événement custom que l'on récupérera au niveau du parent pour reset le name :
            this.$emit('nameWasReset', this.myName);
        }
    },
    // Pour l'event Bus, passer d'un enfant à l'autre, 'age' ici est arbitraire
    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age;
        });
    },
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
