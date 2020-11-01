import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        cartContent: [],
        counter: 0,
    },
    mutations: {
        addToCart: (state, item) => {
            let findItem = state.cartContent.find(product => product.id === item.id)
            if (findItem) {
                findItem.amount++
                findItem.totalPrice = findItem.amount * findItem.price;
            } else {
                state.cartContent.push(item)
                Vue.set(item, 'amount', 1)
                Vue.set(item, 'totalPrice', item.price)
            }
            state.counter++;
        }
    },
    getters: {
        getCartContent: (state) => {
            return state.cartContent
        }
    }
})

export default store;