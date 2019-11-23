import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n/dist/vuex-i18n.umd.js' // load vuex i18n module
import app from './modules/app'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app
  },
  state: {},
  mutations: {}
})

Vue.use(VuexI18n.plugin, store)

export default store
