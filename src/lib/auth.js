import decode from "jwt-decode";
import { get } from "./fetch";
import api from "../api"

const getToken = () => {
  return localStorage.getItem("authToken");
};

const setToken = (token) => {
  localStorage.setItem("authToken", token);
};

const clearToken = () => {
  localStorage.removeItem("authToken");
};

const isTokenExpired = (token) => {
  try {
    const decoded = decode(token);
    return decoded.exp < Date.now() / 1000;
  } catch (err) {
    return false;
  }
};

const validToken = () => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

const validateLogin = async () => {
  if (!validToken()) {
    clearToken();
    throw new Error();
  }

  try {
    return await get(api.userCurrent);
  } catch (error) {
    clearToken();
    throw error;
  }
};

export { getToken, setToken, clearToken, validToken, validateLogin, isTokenExpired };
