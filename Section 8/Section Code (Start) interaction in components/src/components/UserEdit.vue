<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
// Passer d'un enfant à l'autre 3 methodes différentes :
// Repasser par le parent en utilisant les props et les custom events
// Repasser par le parent en passant par les fonctions du parent
// Utiliser l'event Bus pour passer d'un enfant à l'autre !!
// Pour des applications plus complexe on utilisera Vue Ex pour gérer les datas des composants

// You got props  to pass data from a PARENT => CHILD.
// You got events ($emit ) to pass data from CHILD => PARENT.
// And if you got two sibling components which you need to communicate with each other: You can use an event bus to pass data from SIBLING => SIBLING.

import { eventBus } from '../main';
export default {
    props: ['userAge'],
    methods: {
        editAge() {
            this.userAge = 30;
            // this.$emit("ageWasEdited", this.userAge);
            // eventBus.$emit("ageWasEdited", this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
