const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter *2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    increment: state => {
        state.counter++;
    },
    decrement: state => {
        state.counter--;
    },
    decrementWithArgs: (state, payload) => {
        state.counter-= payload;
    },
};

const actions = {
    increment: ({ commit }) => {
        commit('increment');
    },
    decrement: ({ commit }) => {
        commit('decrement');
    },
    decrementWithArgs: ({ commit }, payload) => {
        commit('decrementWithArgs', payload);
    },
    asyncIncrement: ({ commit }) => {
        setTimeout(() => {
            commit('increment');
        }, 1000);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrementWithArgs', payload.by);
        }, payload.duration);
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}