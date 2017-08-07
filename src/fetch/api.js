import axios from 'axios'
import qs from 'qs'

import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://bkapi.opixer.com/';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export default {

    /**
     * 获取分类/标签目录列表
     * @desc 根据状态筛选列表数据，支持分页
     * @params string   type
     * @params string   orderName
     * @params string   orderType
     * @params int      page
     * @params int      perpage
     * @return array    items       列表数据
     * @return int      total       总数量
     * @return int      page        当前第几页
     * @return int      perpage     每页数量
     */
    GetList(params) {
        return fetch('/bookmark/?service=Index.GetList', params)
    },


    /**
     * 获取书签列表
     * @desc 根据状态筛选列表数据，支持分页
     * @params int      id
     * @params string   type
     * @params string   orderName
     * @params string   orderType
     * @params int      page
     * @params int      perpage
     * @return array    items       列表数据
     * @return int      total       总数量
     * @return int      page        当前第几页
     * @return int      perpage     每页数量
     */
    GetItemsList(params) {
        return fetch('/bookmark/?service=Index.GetItemsList', params)
    },
}
