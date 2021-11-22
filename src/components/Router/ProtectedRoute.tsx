import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { AuthState } from "../../reducers/authReducer";
import { AppState } from "../../store";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const userAuth = useSelector<AppState, AuthState>((state) => state.userAuth);
  const { userAuthInfo } = userAuth;
  let location = useLocation();

  if (!userAuthInfo?.token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
