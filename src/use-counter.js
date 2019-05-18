import { connect } from "./use-redux-slice";
import STORE from "./store";

const useReduxSlice = connect(STORE);

export default function useCounter() {
  const data = useReduxSlice(s => s.counter);
  const increment = () => STORE.dispatch({ type: "INCREMENT_COUNTER" });
  const decrement = () => STORE.dispatch({ type: "DECREMENT_COUNTER" });

  return {
    data,
    increment,
    decrement
  };
}
