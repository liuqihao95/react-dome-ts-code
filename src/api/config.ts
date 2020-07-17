import axios from 'axios'
//import React from 'react'
// import { HashRouter } from 'react-router-dom'

// const router = new HashRouter()
// 创建axios实例
const service = axios.create({
  baseURL: '/api/', // api的base_url
  timeout: 200000, // 请求超时时间
  withCredentials: true, // 选项表明了是否是跨域请求
})
//let loading = document.getElementById('axios-loading')
// let request = 0
// 请求头设置
service.interceptors.request.use(
  config => {
    // if (request === 0) loading.style.visibility = 'visible'
    // request++
    config.headers.AuthToken = window.sessionStorage.token || ''
    return config
  },
  err => {
    console.log('请求失败')
    return Promise.reject(err)
  })

// respone拦截器
service.interceptors.response.use(
  res => {
    const token = res.data.Token || ''
    // const State = res.data.StatusCode
    if (token) window.sessionStorage.token = token
    //if (State === 403) this.props.history.push('/')
    // request--
    // if (request === 0) loading.style.visibility = 'hidden'
    return res
  },
  error => {
    return Promise.reject(error)
  },
)
export default service
