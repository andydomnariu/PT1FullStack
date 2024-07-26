import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('Response error:', error.response.data);
    } 
    else if (error.request) {
      console.error('Request error:', error.request);
    } 
    else { 
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default {
    
  getUsers() {
    return apiClient.get('/users');
  },
  createUser(user) {
    return apiClient.post('/users', user);
  },
  updateUser(user) {
    return apiClient.put(`/users/${user.id}`, user);
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`);
  },
};
