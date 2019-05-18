import STORE from "./store";
import { connect } from "./use-redux-slice";
import mock from "./fake-user";

const useReduxSlice = connect(STORE);

export default function useUser() {
  const data = useReduxSlice(state => state.user);
  const logout = () => STORE.dispatch({ type: "LOGOUT_USER" });
  const login = () => STORE.dispatch({ type: "LOGIN_USER", payload: mock() });

  return {
    data,
    login,
    logout
  };
}
