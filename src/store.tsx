import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authLoginReducer } from "./reducers/authReducer";

const reducers = combineReducers({
  userAuth: authLoginReducer,
});

const token = localStorage.getItem("token");

const initalState = {
  userAuth: { userAuthInfo: { token } },
} as {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export type AppState = ReturnType<typeof store.getState>;
