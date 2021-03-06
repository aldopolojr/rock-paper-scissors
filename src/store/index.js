import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const store = createStore({
    state(){
        return {
            settings: {
                sound: true,
                pvp: false,
            },
            game: {
                p1: {
                    name: null,
                    score: null,
                    choice: null
                },
                p2: {
                    name: null,
                    score: null,
                    choice: null
                },
                round: null,
                p1Turn: true,
                showResult: false,
            },
            message: 'hello world',
        };
    },
    mutations: mutations,
    actions: actions,
    getters: getters
});

export default store;