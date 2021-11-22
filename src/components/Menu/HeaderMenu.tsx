import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Button, Container, Menu, Segment } from "semantic-ui-react";
import { logout } from "../../actions/authActions";
import { AuthState } from "../../reducers/authReducer";
import { AppState } from "../../store";

export default function HeaderMenu() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/login";

  const userAuth = useSelector<AppState, AuthState>((state) => state.userAuth);
  const { token } = userAuth.userAuthInfo;

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate(from, { replace: true });
  };

  return (
    <div>
      <Menu fixed="top" inverted pointing size="small">
        <Container>
          <Menu.Item header>Frontend Proyecto Base</Menu.Item>
          <Menu.Item as={Link} to="/">
            Inicio
          </Menu.Item>
          <Menu.Item position="right">
            <Button as="a" inverted onClick={handleLogout}>
              Logout
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
      <Segment vertical style={{ padding: "5em 0em" }}>
        <Container textAlign="center">{token}</Container>
      </Segment>
      <Outlet />
    </div>
  );
}
