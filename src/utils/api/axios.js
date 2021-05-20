/*
 * @Author: your name
 * @Date: 2021-05-12 10:22:06
 * @LastEditTime: 2021-05-12 10:54:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bondc:\Users\LENOVO\Desktop\vite-project\src\utils\axios.js
 */
import Axios from 'axios';
import {
    ElMessage
} from 'element-plus';
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*/*';
Axios.defaults.withCredentials = true;
const baseURL = 'http://api.github.com';

const axios = Axios.create({
    baseURL,
    timeout: 2000 //请求超时2s
})
// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (response) => {
        /**
         * 根据你的项目实际情况来对 config 做处理
         * 这里对 config 不做任何处理，直接返回
         */
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)
// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response) => {
        /**
         * 根据你的项目实际情况来对 response 和 error 做处理
         * 这里对 response 和 error 不做任何处理，直接返回
         */
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status;
            const msg = error.response.data.message;
            ElMessage.error(`Code:${code},Message:${msg}`);
            console.error(`[Axios Error]`, error.response)
        } else {
            ElMessage.error(`${error}`)
        }
        return Promise.reject(error)
    }
)
export default {
    //get请求
    get(url, param) {
        let mdParam = window.Qs.parse(sessionStorage.getItem(Vue.prototype.route.path + '/mdParam'));
        let params = {
            ...param,
            ...mdParam
        };
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                params: params
            }).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            });
        });
    },
    //delete请求
    delete(url, param, config) {
        let mdParam = window.Qs.parse(sessionStorage.getItem(Vue.prototype.route.path + '/mdParam'));
        let params = {
            ...param,
            ...mdParam
        };
        return new Promise((resolve, reject) => {
            axios({
                method: 'delete',
                url: url,
                params: params
            }).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            });
        });
    },
    //post请求
    post(url, param, config) {
        let mdParam = window.Qs.parse(sessionStorage.getItem(Vue.prototype.route.path + '/mdParam'));
        let params = {
            ...param,
            ...mdParam
        };
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                headers: {
                    ...config
                },
                data: params,
                url: url
            }).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            });
        });
    },
    //post请求
    put(url, param, config) {
        let mdParam = window.Qs.parse(sessionStorage.getItem(Vue.prototype.route.path + '/mdParam'));
        let params = {
            ...param,
            ...mdParam
        };
        return new Promise((resolve, reject) => {
            axios({
                method: 'put',
                headers: {
                    ...config
                },
                data: params,
                url: url
            }).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            });
        });
    },
    formPost(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                params: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                withCredentials: true
            }).then(res => {
                resolve(res);
            }).catch(e => {
                reject(e)
            });
        });
    },
    blobPost(url, param) {
        let mdParam = window.Qs.parse(sessionStorage.getItem(Vue.prototype.route.path + '/mdParam'));
        let params = {
            ...param,
            ...mdParam
        };
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                responseType: 'blob',
                data: params,
            }).then(res => {
                resolve(res);
            }).catch(e => {
                reject(e)
            });
        });
    },
    blobGet(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                responseType: 'blob',
                params: params,
                headers: {
                    'Content-Type': 'application/octet-stream;charset=utf-8'
                }
            }).then(res => {
                resolve(res);
            }).catch(e => {
                reject(e)
            });
        });
    },
    baseURL: API_ROOT
}