<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!-- Composant dynamique !!! : -->
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p> {{ selectedComponent }} </p>
                <!-- Keep alive garde le composant en vie, il ne sera pas regénérer quand on changera de composant, sans ca il est détruit -->
                <keep-alive>
                    <component :is="selectedComponent">Default Content</component>
                </keep-alive>

                <!-- Les slots : -->
                <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p slot="content">A wonderful Quote !</p>
                    <p>Pas de nom pour ce slot (defaut)</p>
                </app-quote>
                    
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
import New from './components/New.vue';
import Author from './components/Author.vue';

    export default {
        components: {
            appQuote: Quote,
            appAuthor : Author,
            appNew : New,
        },
        data() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        }
        
    }
</script>

<style>
</style>
