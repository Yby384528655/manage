import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './action';
import getters from './getter';
Vue.use(Vuex);
const moduleA={
    state: state,
    mutations: mutations,
    actions: actions,
    getters:getters
};
const store = new Vuex.Store({
    modules: {
        a: moduleA
    },

    // state: state,
    // mutations: mutations,
    // actions: actions
});
export default store;