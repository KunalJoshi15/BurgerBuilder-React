import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burget-builder-backend.firebaseio.com/'
})

export default instance