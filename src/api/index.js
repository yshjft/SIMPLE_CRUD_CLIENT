import axios from 'axios'

const instance = axios.create({baseURL: '/api', withCredentials: true, time: 20000})

// async function errorHandler(e) {
//   // eslint-disable-next-line no-console
//   console.log(`[Error Data]: ${JSON.stringify(e.response.data, null, 2)}`)
//   if (e.response.status === 401) {
//     window.open('/', '_self')
//   }
//   throw e
// }
//
// if (process.env.NODE_ENV !== 'production') {
//   instance.interceptors.request.use(
//     (config) => {
//       const {url, method, params, data} = config
//       // eslint-disable-next-line no-console
//       console.log(`[Request]: ${JSON.stringify({url, params, method, data}, null, 2)}`)
//       return config
//     },
//     (error) => Promise.reject(error)
//   )
//   instance.interceptors.response.use((response) => {
//     // eslint-disable-next-line no-console
//     console.log(`[Response Data]: ${JSON.stringify(response.data, null, 2)}`)
//     return response
//   }, errorHandler)
// } else {
//   instance.interceptors.response.use((response) => response, errorHandler)
// }

export default instance
