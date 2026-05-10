import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000',
  timeout: 15000,
})

export const loginUser = async (payload) => {
  const response = await api.post('/login', payload)
  return response.data
}

export const getDashboard = async () => {
  const response = await api.get('/dashboard')
  return response.data
}

export const uploadData = async (payload) => {
  const response = await api.post('/upload', payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}

export const predictWithAI = async (payload) => {
  const response = await api.post('/predict', payload)
  return response.data
}

export const getMissions = async () => {
  const response = await api.get('/missions')
  return response.data
}

export const getPoints = async () => {
  const response = await api.get('/points')
  return response.data
}

export default api
