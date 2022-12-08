import { Vue } from 'vue'
import Vuex from 'vuex'

export const store = new Vuex.Store({
    state: {
        count: 0,
    },
    getters: {},
    actions: {},
    mutations: {
        INCREMENT_COUNT(state, payload) {
            state.count += payload;
        },
    }
})