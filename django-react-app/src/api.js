import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';

export const login = (data) => axios.post(`${BASE_URL}login`, data)
  .then(response => {
    alert("Login successful");
    return response;
  })
  .catch(error => {
    alert("Login failed");
    throw error;
  });

export const register = (data) => axios.post(`${BASE_URL}register`, data)
  .then(response => {
    alert("Registration successful");
    return response;
  })
  .catch(error => {
    alert("Registration failed");
    throw error;
  });

export const getUserInfo = () => axios.get(`${BASE_URL}user`)
  .then(response => {
    // Do something with the response
    return response;
  })
  .catch(error => {
    alert("Failed to fetch user info");
    throw error;
  });

export const logout = () => axios.post(`${BASE_URL}logout`)
  .then(response => {
    alert("Logout successful");
    return response;
  })
  .catch(error => {
    alert("Logout failed");
    throw error;
  });

  export const forgotPassword = (email, newPassword) => axios.post(`${BASE_URL}forgotpassword`, { email, new_password: newPassword })
  .then(response => {
    alert("Password reset successful");
    return response;
  })
  .catch(error => {
    alert("Failed to initiate password reset");
    throw error;
  });
