import { createStore } from "redux";

export default createStore(
  reducer,
  {
    counter: 0,
    user: null,
    files_list: []
  },
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - 1 };
    case "LOGIN_USER":
      return { ...state, user: { ...action.payload } };
    case "LOGOUT_USER":
      return { ...state, user: null };
    case "SET_FILES":
      return { ...state, files_list: action.payload.slice(0) };
    default:
      return state;
  }
}
