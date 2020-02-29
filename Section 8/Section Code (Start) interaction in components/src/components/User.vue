<template>
    <div class="component">
        <h1>The {{name}} Component</h1>
        <p>I'm an awesome User!</p>
        <p>age: {{ age }}</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
<!-- Pour passer de la donnée, des fonctions aux enfants, ici UserDetail que l'on récupérera avec les props : -->
<!-- Pour passer de l'enfant au parent on va utiliser les custom events avec un @ classique, voir dans UserDetail -->
                <app-user-detail 
                    :myName="name" 
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: "Romain",
                age: 37,
            };
        },
        methods: {
            changeName() {
                this.name = "Boby";
            },
            resetName() {
                this.name = "Romain";
            },
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
