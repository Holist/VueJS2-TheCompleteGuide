import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // nos data ici :
        counter: 0,
    },
    getters: {
        // les calculs/modif de nos datas dans des getters pour éviter la répétition de code :
        doubleCounter: state => {
            return state.counter *2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    }
});