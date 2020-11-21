import decode from "jwt-decode";
import { get } from "./fetch";

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
  if (!validToken) {
    clearToken();
    return false;
  }

  try {
    return await get("http://localhost:3000/users/me");
  } catch (error) {
    clearToken();
    throw error;
  }
};

export { getToken, setToken, clearToken, validToken, validateLogin, isTokenExpired };