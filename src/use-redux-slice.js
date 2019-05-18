import { useEffect, useCallback, useState } from "react";

export function connect(STORE) {
  /**
   * `useReduxSlice` is *functionally impure*.
   * It reaches outside of the react tree to fetch data from `redux`.
   * **DO NOT** use `React.memo()` on any component that uses this hook.
   * @param {(T) => any} selector
   * @returns {any} Slice of state returned by `selector`
   */
  return function useReduxSlice(selector) {
    const state = STORE.getState();

    const memo = useCallback(safe(selector), [state]);
    const [slice, setSlice] = useState(memo(state));

    useEffect(() => {
      return STORE.subscribe(() => {
        const state = STORE.getState();
        /**
         * @note setSlice will only trigger a rerender if `memo(state) !== slice`.
         * e.g. if the state is updated. be careful about mutibility. */
        setSlice(memo(state));
      }, [state]);
    });

    return slice;
  }
}

function safe(selector) {
  return function safeSelector(state) {
    try {
      const part = selector(state);
      // Redux advises against using `undefined`, suggesting `null` instead,
      // hence the hard-check against `undefined` specifically should mean a bad selector.
      if (part === undefined) throw Error("selector returned undefined");
      return part;
    } catch (error) {
      console.error("The above error occured in useReduxSlice");
      console.error(error);
    }
  };
}
