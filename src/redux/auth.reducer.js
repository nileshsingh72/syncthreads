import {
  location,
  loginError,
  loginLoading,
  loginLogout,
  loginSuccess,
} from "./auth.types";
const long = JSON.parse(localStorage.getItem("longitude")) || "";
const lati = JSON.parse(localStorage.getItem("latitude")) || "";
const getUser = JSON.parse(localStorage.getItem("user")) || {};
const getToken = JSON.parse(localStorage.getItem("token")) || "";
const iState = {
  loader: false,
  error: false,
  user: getUser,
  long: long,
  lati: lati,
  isAuth: getToken ? true : false,
};
export const userReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case loginLoading: {
      return {
        ...state,
        loader: true,
      };
    }
    case loginError: {
      return {
        ...state,
        loader: false,
        error: true,
      };
    }

    case loginSuccess: {
      return {
        ...state,
        loader: false,
        error: false,
        isAuth: true,
        user: payload.user,
      };
    }
    case loginLogout: {
      return {
        ...state,
        loader: false,
        error: false,
        isAuth: false,
        user: {},
      };
    }
    case location: {
      return {
        ...state,
        long: payload.longitude,
        lati: payload.latitude,
      };
    }
    default: {
      return state;
    }
  }
};
