import { useReducer, useCallback } from "react";

export default (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const customDispatch = useCallback((action) => {
    dispatch({ ...action, launch: dispatch });
  }, []);

  return [state, customDispatch];
};