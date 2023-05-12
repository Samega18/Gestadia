// services/UserService.js
import StorageService from "./StorageService";

const API_URL = 'http://192.168.1.7:9000/api';

const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/authenticate`, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'username': username, 'password': password, 'rememberMe': true })
    });
    const data = await response.json();
    StorageService.saveToken(data.id_token);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const register = async (user) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const editUser = async (userId, user) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
    login,
    register,
    editUser
};
