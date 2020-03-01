<!-- Upper Camel Case pour le nom du composant -->
<template>
<!-- UN SEUL ELEMENT ROOT, ici la div : -->
    <div>
        <p>Server Status : {{ status }}</p>
        <button @click="changeStatus">Change Status</button>
        <hr>
    </div>
</template>

<script>
    export default {
    // data sous forme de fonction car on est dans la pté render de l'instance de vue, ceci pour éviter que les composants si ils sont réutilisés à différents moments se 'percutent'
        data() {
            return {
                status: 'Critical'
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Normal'
            }
        }
    }
</script>
