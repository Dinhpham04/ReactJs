import axios from "../axios"

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUsers = (inputId) => {
    // get data from server through api 
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('check data from service: ', data)
    // push data to server through api 
    return axios.post('/api/create-new-user', data)
}

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
}
