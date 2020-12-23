import axios from 'axios'

// 最终方案
export function request(config) {
    // 1. 创建 axios 实例  
    const intance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 3000
    });

    // 2.axios 的拦截器
    //axios.interceptors // 全局拦截

    // 请求拦截
    intance.interceptors.request.use(config => {
        // console.log(config);
        // 拦截后返回 就不会打印错误信息  TypeError
        return config;
    }, err => {
        console.log(err);
    })

    // 响应拦截
    intance.interceptors.response.use(res => {
        // console.log(res);
        // 拦截后返回 就不会打印 undefined
        return res.data
    }, err => {
        console.log(err);
    })


    // 3.发送真正的网络请求
    return intance(config)
}