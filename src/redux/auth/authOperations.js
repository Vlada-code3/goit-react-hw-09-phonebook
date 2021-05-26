import axios from "axios";
import { loginError, loginRequest, loginSuccess, registerError, registerRequest, registerSuccess } from "./authActions";

const API_KEY = "AIzaSyC2-mGc16RZCm9xZRf0oQZyMFelD7l-ljo";
// const API_KEY = process.env.REACT_APP_API_KEY;

export const registerOperation = user => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
      ...user,
      returnSecureToken: true
    });

    dispatch(registerSuccess(data));
  } catch (error) {
    console.dir(error);
    dispatch(registerError(error.response.data.error.message));
  }
};
export const loginOperation = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      ...user,
      returnSecureToken: true
    });
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data.error.message));
  }
};
