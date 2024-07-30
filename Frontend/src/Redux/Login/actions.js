import axios from "axios";
import { LOGIN_NOT, LOGIN_SUCCESS } from "./acrionTypes";

export const loginUser = (credentials) => async (dispatch) => {
  const API_URL = "  http://localhost:8080/user/login";
  try {
    const resp = await axios.post(API_URL, credentials);

    dispatch({ type: LOGIN_SUCCESS, payload: resp.data.token });

    alert("Login successful");
  } catch (error) {
    dispatch({ type: LOGIN_NOT });
    console.log(error.message);
  }
};
