/*
 * @Author: your name
 * @Date: 2021-05-12 10:45:57
 * @LastEditTime: 2021-05-12 10:45:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bondc:\Users\LENOVO\Desktop\vite-project\src\config.js
 */
/*配置baseurl*/
let apiRoot;
if (process.env.NODE_ENV === 'production') { // 不要修改，生产环境使用
    //let prefixUrl = window.location.protocol + '//' + location.host + '/';
    //apiRoot = prefixUrl + window.configJs.API_ROOT;
    //console.log("当前请求：" + apiRoot);
    apiRoot = window.configJs.API_ROOT;
} else { // 可以修改
    window.configJs.PUBLIC_PATH = '';
    // apiRoot = 'http://localhost:9100/';
    apiRoot = 'http://172.18.19.101/';
}
export const API_ROOT = apiRoot;