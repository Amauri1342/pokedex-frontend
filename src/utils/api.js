import axios from './axios'


export default {
  auth: {
    login (credentials) {
      return axios.post('/api/token/', credentials)
    },
    refresh (refresh) {
      return axios.post('/api/token/refresh/', { refresh })
    },
    getUser() {
      return axios.get('/api/user/me/')
    },
  },

  usuarios: {
    usuarios: {
      createUsuario(data) {
        return axios.post('api/user/create/', data)
      },
      actualizarUsuario(data) {
        return axios.patch('api/user/user/me/', data)
      },
      actualizarUsuarioImg(imagen) {
        return axios.patch(`/api/user/upload-image/`, imagen, { headers: {'Content-Type': 'multipart/form-data'}})
      }
    },
  },
}
