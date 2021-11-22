import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT,
} from "../constants/authConstants";

export interface AuthState {
  loading?: boolean;
  error?: string;
  userAuthInfo: { token: string | null };
}

interface AuthAction {
  type: string;
  payload?: any;
}

export const authLoginReducer = (
  state: AuthState = { userAuthInfo: { token: null } },
  action: AuthAction
) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { loading: true };
    case AUTH_LOGIN_SUCCESS:
      return { loading: false, userAuthInfo: action.payload };
    case AUTH_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case AUTH_LOGOUT:
      return { loading: false, userAuthInfo: { token: null } };
    default:
      return state;
  }
};
