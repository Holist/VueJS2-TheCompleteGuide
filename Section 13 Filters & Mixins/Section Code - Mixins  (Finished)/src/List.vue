<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        // Ces datas sont présentes dans le mixin avec le même nom, celle du composant actuel prévalent :
        data() {
            return {
                fruits: ['Apple2', 'Banana2', 'Mango2', 'Melon2'],
            }
        },
        mixins: [fruitMixin],
        // Le composant a la priorité sur les mixins (executer aprés) en cas de conflit
        created() {
            console.log('Inside List Created Hook');
        }
    }
</script>

<style>
</style>
