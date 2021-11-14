import { FAVORITE_CURRENCIES } from '../actions.type';
import { FAVORITE_CURRENCIES_SAVE } from '../mutations.type';



import ApiService from '@/common/api.service'


const state = {
    listFavoriteCurrencies: []
}

const getters = {
    favoriteCurrencies(state) {
        return state.listFavoriteCurrencies
    }
}


const actions = {
    [FAVORITE_CURRENCIES](context) {
        return ApiService.get('/favorite/currencies', 'favoriteCurrencies').then(
            response => {
                context.commit(FAVORITE_CURRENCIES_SAVE, response.data)
                return new Promise((resolve) => resolve(response))
            }
        )
    }
}

const mutations = {
    [FAVORITE_CURRENCIES_SAVE](state, favoriteCurrencies) {
        state.listFavoriteCurrencies = favoriteCurrencies
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}