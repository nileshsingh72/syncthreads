import {
  location,
  loginError,
  loginLoading,
  loginLogout,
  loginSuccess,
} from "./auth.types";
import axios from "axios";

// action for login
export const loginAction = (data) => async (dispatch) => {
  dispatch({ type: loginLoading });
  try {
    let url = `${REACT_APP_URL}user/signin`;
    let res = await axios.post(url, data);
    // console.log(res.data, "herer");
    if (res.data.status) {
      dispatch({ type: loginSuccess, payload: res.data });
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    dispatch({ type: loginError });
    console.log(error.message);
    return false;
  }
};

// action for logout
export const logoutAction = () => (dispatch) => {
  dispatch({ type: loginLogout });
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  return true;
};

//action for coordinates
export const getCoordinates = () => (dispatch) => {
  getLocation(dispatch);
};
function getLocation(dispatch) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
      dispatch({ type: location, payload: position.coords });
      localStorage.setItem(
        "longitude",
        JSON.stringify(position.coords.longitude)
      );
      localStorage.setItem(
        "latitude",
        JSON.stringify(position.coords.latitude)
      );
    }
  } else {
    console.log("No geolocation");
  }
}
