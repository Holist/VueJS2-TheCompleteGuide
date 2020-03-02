<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <!-- ":to" bind sur du js et plus "to" sur une string pour le rendre dynamique -->
        <!-- On peut récupérer la route actuelle avec $route -->
        <router-link 
            tag="button" 
            :to="'/user/' + $route.params.id + '/edit'"
            class="btn btn-primary">Edit User</router-link>
        <!-- Ou un shortcut name du fichier route avec un objet params qui va bien -->
        <router-link 
            tag="button" 
            :to="{ name: 'userEdit', params: { id: $route.params.id } }"
            class="btn btn-primary">Edit User (name and params)</router-link>
        <!-- Query parameters -->
        <router-link 
            tag="button" 
            :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"
            class="btn btn-primary">Query params</router-link>
    </div>
</template>