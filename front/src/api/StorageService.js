// services/StorageService.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error(error);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const saveUserData = async (userData) => {
  try {
    const jsonValue = JSON.stringify(userData);
    await AsyncStorage.setItem('userData', jsonValue);
  } catch (error) {
    console.error(error);
  }
};

const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
    saveToken,
    getToken,
    saveUserData,
    getUserData
};
