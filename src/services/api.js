import axios from 'axios'

const api = axios.create({
	baseURL: 'https://tinderclonethenletter.herokuapp.com'
})

export default api
