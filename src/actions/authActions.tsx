import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT,
} from "../constants/authConstants";
import { AppState } from "../store";
import { AUTH_LOGIN_REQUEST } from "../constants/authConstants";

export const login =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<void>, AppState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<AppState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: AUTH_LOGIN_REQUEST });

      //const res = await axios.post('/api/users/login', { email, password });
      const response = {
        token: "123",
      };

      setTimeout(() => {
        dispatch({
          type: AUTH_LOGIN_SUCCESS,
          payload: response,
        });

        localStorage.setItem("token", response.token);
      }, 5000);
    } catch (error: any) {
      dispatch({
        type: AUTH_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = (): ThunkAction<void, AppState, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<AppState, unknown, AnyAction>): void => {
    dispatch({ type: AUTH_LOGOUT });
    localStorage.removeItem("token");
  };
};
