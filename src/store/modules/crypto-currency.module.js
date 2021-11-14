import { CRYPTO_CURRENCIES } from  '../actions.type'
import { CRYPTO_CURRENCIES_SAVE } from '../mutations.type'



import ApiService from '@/common/api.service';


const state = {
    listCryptoCurrencies: []
}


const getters = {
    cryptoCurrencies(state){
        return state.listCryptoCurrencies
    }
}

const actions = {
    [CRYPTO_CURRENCIES](context){
        return ApiService.get('crypto/currencies').then(
            response => {
                context.commit(CRYPTO_CURRENCIES_SAVE, response.data)
                return new Promise((resolve) => resolve(response))
            }
        )
    }
}

const mutations = {
    [CRYPTO_CURRENCIES_SAVE](state, cryptoCurrencies){
        state.listCryptoCurrencies = cryptoCurrencies
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}