import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../Constants/ActionTypes";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default LoginReducer;
