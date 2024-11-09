import { createStore } from "vuex";
import {ref} from 'vue'
const store = createStore({
    state: {
        token: ref({}),
        currentUser: ref({})
    },
    getters: {
        GetToken(state) {
            return state.token.value;
        },
        GetCurrentUser(state){
            return state.currentUser.value;
        }
    },
    mutations: {
        MutateToken(state, data) {
            state.token.value = data
        },
        MutateCurrentUser(state, data) {
            state.currentUser.value = data
        }
    },
    actions: {}
});
export default store;