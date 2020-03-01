<template>
<!-- SLOT intéressant pour le style ! tout le reste est géré sur le parent -->
<!-- On peut donner des titres aux slot que l'on spécifiera au niveau du parent -->
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color: grey">
                <!-- Si un slot n'est pas défini par le parent il aura une valeur par défaut, ici The SubTitle -->
                <slot name="subtitle">The SubTitle</slot>
            </span>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
        <div>
            <!-- Pas de nom pour ce slot : default -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
 div {
     border: 1px solid #ccc;
     box-shadow: 1px 1px 2px black;
     padding: 30px;
     margin: 30px auto;
     text-align: center;
 }
 /* Le style s'appliqera au contenu du slot défini dans App.vue */
 h2 {
     color: red;
 }
 .title {
     font-style: italic;
 }
</style>