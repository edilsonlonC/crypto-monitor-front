import Vue from "vue";
import favoriteCurrenciesFake from '../fakes/favorite-crypto.json'
let fakes = {
    favoriteCurrencies: favoriteCurrenciesFake
}

const timer = 400;

let _Vue = null;
console.log(_Vue)

const ApiService = {
    setVue(){
        _Vue = Vue;
    },
    init(){},
    get(resource, responseExpected){
        let ex = fakes[responseExpected];
        return new Promise(( resolve) => {
            setTimeout(() => {
                resolve(ex)
            }, timer)
        })
    }
}





export default ApiService;