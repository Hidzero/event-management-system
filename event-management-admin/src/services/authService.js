import API from './api';

export const register = async (userData) => {
  const { data } = await API.post('/auth/register', userData);
  return data;
};

export const login = async (userData) => {
  const { data } = await API.post('/auth/login', userData);
  return data;
};

