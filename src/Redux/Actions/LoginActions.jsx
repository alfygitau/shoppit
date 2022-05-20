import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../Constants/ActionTypes";

function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}
function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}
function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

const LoginInitiate = (username, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post("https://dummyjson.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        const user = response.data;
        console.log("user", user);
        dispatch(loginSuccess(user));
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};

export default LoginInitiate;
