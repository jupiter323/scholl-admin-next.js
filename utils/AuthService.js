import { oAuthTokenApi } from "../components/User/index/api";
import decode from "jwt-decode";

export const logIn = async (postBody) => {
  const data = await oAuthTokenApi(postBody);
  return data;
};
export const loggedIn = () => {
  // Checks if there is a saved token and it's still valid
  const token = getToken();
  return !!token && !isTokenExpired(token); // handwaiving here
};

export const setToken = (token, expires_at) => {
  // Saves user token to localStorage
  localStorage.setItem('token', token);
  localStorage.setItem('expires_at', expires_at);
};

export const getToken = () => {
// Retrieves the user token from localStorage
  if (typeof window !== 'undefined') {
    // Is running on the client
    return localStorage.getItem('token');
  }
  console.log('we are running on the server');
};

export const logout = () => {
  // Clear user token from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('expires_at');
};

export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired.
      return true;
    } return false;
  } catch (err) {
    return false;
  }
};

export default [
  loggedIn,
  setToken,
  getToken,
  logout,
];
