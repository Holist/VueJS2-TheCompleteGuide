<template>
<div>
    <h3>Edit the User</h3>
    <p>Locale: (via query params) : {{ $route.query.locale }} </p>
    <p>Analytics: (via query params) : {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some Extra Data</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    // Authorization pour SORTIR : (formulaires, message d'alerte pour éviter les erreurs de manip user...)
    // Ici on demande confirmation AVANT de quitter la page (via un lien ou le bouton back du navigateur) : (paniers, formulaires pas validés...)
    beforeRouteLeave (to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            if (confirm('Are you sure?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>