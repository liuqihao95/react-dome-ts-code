import axios from './config'
import qs from 'qs'

function get (api: string) {
  return (body = {}) => axios.get(api, { params: body })
}

function post (api: string) {
  return (body = {}) => axios.post(api, qs.stringify(body))
}

export const loginApi = {
  SFLLLogin: post('/Account/SFLLLogin'),
  SFLLADLogin2: post('/Account/SFLLADLogin'),
  SFLLADLogin: get('/Account/Get')
}
