import axios from "axios";

const url = 'https://api.slingacademy.com/v1/sample-data/'
//users?offset=10&limit=20/
// const url = 'https://jsonplaceholder.typicode.com/'
// const url = 'https://calm-plum-jaguar-tutu.cyclic.app/'

export const API = axios.create({
    baseURL: url
})

export const getAllUsersFn = async (signal) => {
    const res = await API.get('users?offset=10&limit=1000', { signal })
    // const res = await API.get('todos', { signal })
    return res.data.users
    // return res.data
}

export const postUserFn = async (data) => {
    const res = await API.post('users', data)
    return res.data.users
}

export const deleteUserFn = async (id) => {
    const res = await API.delete(`users/${id}`)
    return res.data
}

export const updateUserFn = async ({ id, data }) => {
    const res = await API.put(`users/${id}`, data)
    return res.data
}