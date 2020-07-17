import axios from './config'
import qs from 'qs'

function get (api: string) {
  return (body = {}) => axios.get(api, { params: body })
}

function post (api: string) {
  return (body = {}) => axios.post(api, qs.stringify(body))
}

export const loginApi = {
  getSystemName: get('SystemConfig/GetSystemName'),
  getVCode: get('Account/GetVCode'),
  login: post('account/login')
}
