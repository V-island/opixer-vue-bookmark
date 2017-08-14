import Vue from 'vue'
import Vuex from 'vuex'

import list from './modules/list'
import config from './modules/config'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		list,
		config
	}
})