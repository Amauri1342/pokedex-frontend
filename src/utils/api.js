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
    // getDepartamentos (filter) {
    //   return axios.get('/api/quoter/departamentos_disponibles/', { params: filter})
    // },
    // resetPassword (data) {
    //   return axios.post('/api/user/reset-password/', data)
    // },
    // actualizarUsuario(data) {
    //   return axios.patch(`/api/user/me/`, data)
    // },
    // changePassword(data) {
    //   return axios.put('/api/user/change-password/', data)
    // },
    // actualizarImagenUsuario(imagen) {
    //   return axios.patch(`/api/user/me/upload-image/`, imagen, { headers: {'Content-Type': 'multipart/form-data'}})
    // },
  },

  usuarios: {
    usuarios: {
      createUsuario(data) {
        return axios.post('api/user/create/', data, { headers: {'Content-Type': 'multipart/form-data'}})
      },
      // deleteUsuario(id) {
      //   return axios.delete(`api/user/user/${id}` )
      // },
      actualizarUsuario(data) {
        return axios.patch('api/user/user/me/', data)
      },
      actualizarUsuarioImg(imagen) {
        return axios.patch(`/api/user/upload-image/`, imagen, { headers: {'Content-Type': 'multipart/form-data'}})
      }
    },
  },
}
