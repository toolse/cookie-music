import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'; // 进度条

// 配置基础路径
let BASE_URL
const env = process.env.NODE_ENV
if (env === 'development') {
    BASE_URL = 'http://120.27.1.91:3000'
} else if (env === 'production') {
    BASE_URL = 'http://120.27.1.91:3000'
}

// 请求配置
let res = axios.create({
    timeout: 1000 * 30, // 请求30s超时
    baseURL: BASE_URL, // 基础路径
    responseType: 'json', // 请求响应类型
    responseEncoding: 'utf8', // 编码格式
    // withCredentials: true, // 跨域请求时要使用凭证
    /**
     * 允许在向服务器发送前，修改请求数据
     * 只能用在 'PUT', 'POST' , 'PATCH' 请求方法
     */
    transformRequest: [
        data => qs.stringify(data)
    ],
    // headers: {
    //     get: {
    //         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    //     },
    //     post: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     }
    // },
})

res.interceptors.request.use(
    config => {
        NProgress.start(); // 开启进度条
        return config;
    }
);

// axios结束拦截
res.interceptors.response.use(
    config => {
        NProgress.done(); // 关闭进度条
        return config;
    }
);

// 定义api函数
let ajaxMethod = ['get', 'post']
let api = {}
ajaxMethod.forEach(method => {
    // 数组取值的两种方式
    api[method] = (url, params = {}, config = {}) => {
        return new Promise((resolve, reject) => {
            res[method](url, params, config)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
})

export default api