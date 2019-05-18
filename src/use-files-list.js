import { connect } from "./use-redux-slice";
import fakeFileset from "./fake-fileset";
import STORE from "./store";

const useReduxSlice = connect(STORE);

export default function useFilesList() {
  const data = useReduxSlice(s => s.files_list);
  const fetch = () =>
    setTimeout(
      () => STORE.dispatch({ type: "SET_FILES", payload: fakeFileset() }),
      600
    );

  return {
    data,
    fetch
  };
}
