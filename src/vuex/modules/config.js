import * as types from '../types'

/**
 * Bookmark通用配置
 */
const state = {
	loading: false
}

const actions = {
	setLoadingState({ commit }, status) {
		commit(types.CON_LOADING_STATUS, status)
	}
}

const getters = {
	loading: state => state.loading
}

const mutations = {
	[types.CON_LOADING_STATUS](state, status) {
		state.loading = status
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}