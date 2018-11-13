import Fly from '../lib/wx'

let $http = new Fly()

$http.interceptors.request.use((config, promise) => {
  config.headers['X-Tag'] = 'flyio'
  return config
})

$http.config.baseURL = 'https://wendux.github.io/'
