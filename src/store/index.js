import { createStore } from 'vuex'
import { getWeather } from '@/assets/modules/open-weather'

export default createStore({
  state: {
    apiKey: "ac5829138d2e78420b27e73454b24590",
    getFullWeather: null,
  },
  getters: {
    getFullWeather: state => state.getFullWeather
  },
  mutations: {
    weatherInfo(state, payload) {
      state.getFullWeather = payload;
    }
  },
  actions: {
   async weatherInfo({commit, state}, city){
      commit("weatherInfo", await getWeather(state.apiKey, city) )
    }
  },
  modules: {
  }
})
