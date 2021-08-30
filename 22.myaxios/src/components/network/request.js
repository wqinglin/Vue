import axios from 'axios'
//方法一
// export function request(config, success, failture) {
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//         .then(res => {
//             //   console.log(res);
//             success(res)
//         })
//         .catch(err => {
//             //   console.log(err);
//             failture(err)
//         })
// }

//方法二
// export function request(config) {
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config.baseConfig)
//         .then(res => {
//             //   console.log(res);
//             config.success(res)
//         })
//         .catch(err => {
//             //   console.log(err);
//             config.failture(err)
//         })
// }

//方法三
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1.创建axios实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
//         // 发送真正的网络请求
//         instance(config)
//             .then(res => {
//                resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }



//方法四
// export function request(config) {
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     return instance(config)
// }


//axios的拦截器(这里是拦截局部，也可以拦截全局)
// axios.interceptors.request;  //拦截全局
//2.axios拦截器

// 1.比如config中的一些信息不符合服务器的要求
// 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图片
// 3.某些网络请求(比如登录(token)),必须携带一些特殊信息
//拦截请求
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    instance.interceptors.request.use(
        config => {
            console.log(config);
            return config
        },
        err => {
            console.log(err);
        })
    //拦截响应
    // instance.interceptors.response.use()
    instance.interceptors.response.use(res => {
        console.log(res);
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)
}

