import Api from '@/fetch/api'
import * as types from '../types'

const state = {
	list: ''
}

const actions = {

	/**
	 * 获取书签列表
	 * @param  {[type]} options.commit [description]
	 * @param  {[type]} type           [description]
	 * @return {[type]}                [description]
	 */
	getList({ commit }, type) {
		commit(types.COM_LOADING_STATUS, true)
		if(type == 'sort') {
		    Api.SortList(type)
		        .then(res => {
		            commit(types.COM_LOADING_STATUS, false)
		            commit(types.GET_SORT_LIST, res)
		        })
		} else if(type == 'label') {
		    Api.LabelList(type)
		        .then(res => {
		            commit(types.COM_LOADING_STATUS, false)
		            commit(types.GET_LABEL_LIST, res)
		        })
		}
	}
}

const getters = {
	getList: state => state.list
}

const mutations = {
	[types.GET_SORT_LIST](state, res) {
		state.list = res.data
	},
	[types.GET_LABEL_LIST](state, res) {
		state.list = res.data
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}