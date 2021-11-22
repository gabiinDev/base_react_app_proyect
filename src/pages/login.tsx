import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  InputOnChangeData,
  Segment,
} from "semantic-ui-react";
import { login } from "../actions/authActions";
import { AuthState } from "../reducers/authReducer";
import { AppState } from "../store";

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [authData, setAuthData] = useState({ email: "", password: "" });

  const userAuth = useSelector<AppState, AuthState>((state) => state.userAuth);
  const { loading, error, userAuthInfo } = userAuth;

  const loginHandler = async () => {
    await dispatch(login(authData.email, authData.password));
    navigate(from, { replace: true });
  };

  const handleFormInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    { name, value }: InputOnChangeData
  ) => setAuthData({ ...authData, [name]: value });

  useEffect(() => {
    if (userAuthInfo?.token) {
      console.log("isAuthenticated");
      navigate(from, { replace: true });
    }
  }, [userAuthInfo?.token]);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Login
        </Header>
        <Form size="small" loading={loading}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email"
              type="email"
              value={authData.email}
              onChange={handleFormInputChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={authData.password}
              onChange={handleFormInputChange}
            />

            <Button color="teal" fluid size="small" onClick={loginHandler}>
              Login
            </Button>
          </Segment>
        </Form>
        <Segment size="small">
          Es nuevo aquí? <a href="#">Registrarse</a>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
