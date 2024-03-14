import axios from './axios'


export default {
  cotizador: {
    getSemanas (filter) {
      return axios.get('/api/quoter/semanas_disponibles/', { params: filter })
    },
    getZonas (filter) {
      return axios.get('/api/quoter/secciones_disponibles/', { params: filter })
    },
    getDepartamentos (filter) {
      return axios.get('/api/quoter/departamentos_disponibles/', { params: filter})
    },
    getDepartamento (filter) {
      return axios.get('/api/quoter/semana_departamento/', { params: filter})
    },
    createCotizacio (data) {
      return axios.post('/api/quoter/cotizacion/create', data)
    },
    postContacto (data){
      return axios.post('/api/contact/create', data)
    }
  },
}
