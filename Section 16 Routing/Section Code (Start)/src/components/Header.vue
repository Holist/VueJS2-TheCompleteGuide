<template>
    <div>
        <ul class="nav nav-pills">
            <!-- 
            <li class="nav-item">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/user">User</router-link>
            </li> -->

            <!-- Le link se fera sur le li (via le tag) -->
            <!-- active-class change la classe active par défaut (pour que Boostrap fonctionne correctement) sinon c'est pas active mais 'router-link-active' -->
            <!-- le keyword "exact" affectera la classe que si la route est exactement celle du to= -->
            <!-- Sinon /peuimporte matchera, ce n'est pas ce que l'on veut dans ce cas sinon le bouton Home reste allumé tout le temps -->
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <!-- <router-link to="/user/1" tag="li" active-class="active" exact><a>User id 1</a></router-link>
            <router-link to="/user/2" tag="li" active-class="active" exact><a>User id 2</a></router-link> -->
            <router-link to="/user" tag="li" active-class="active" exact><a>User</a></router-link>

        </ul>
    </div>
</template>