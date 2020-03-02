import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);
// Pour éviter que le store soit trop enorme :
// On va créer des modules pour les différentes parties de notre app et les intégrer ici
// Pour les getters/mutations/actions commun à notre app on va utiliser des fichiers dédiés.

export const store = new Vuex.Store({
    state: {
        // nos data ici :
        counter: 0,
        value: 0
    },
    getters: {
        // Pour "voir" les data, on les renvois via des getters pour éviter la répétition de code :
        doubleCounter: state => {
            return state.counter *2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state => {
            return state.value;
        },
    },
    mutations: {
        // Avec les mutations on va Modifier (on ne renvoi pas) les valeurs de nos datas directement dans le store
        // Les mutations sont synchrones obligatoirement
        // Pour les traitements asynchrones on utilisera les "actions"
        // Best practices : Utiliser des actions plutot que des mutations directement.
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        },
        // payload est arbitraire, c'est l'argument de la fonction decrement qui peut passer par une action
        // decrement prendra un nombre en argument
        decrementWithArgs: (state, payload) => {
            state.counter-= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        },
    },
    // Pour les traitements asynchrones on utilisera les "actions"
    // Best practices : Utiliser des actions plutot que des mutations directement. 
    actions: {
        increment: ({ commit }) => {
            commit('increment');
        },
        decrement: ({ commit }) => {
            commit('decrement');
        },
        // decrement with arguments :
        decrementWithArgs: ({ commit }, payload) => {
            commit('decrementWithArgs', payload);
        },
        asyncIncrement: ({ commit }) => {
            setTimeout(() => {
                commit('increment');
            }, 1000);
        },
        // payload est ici un objet, arguments mutliples :
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrementWithArgs', payload.by);
            }, payload.duration);
        },
        updateValue({commit}, payload) {
            commit('updateValue', payload)
        },
    },
    // Import des modules pour un store clean :
    // modules: {
    //     counter
    // }
});