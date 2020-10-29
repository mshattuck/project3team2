import React, { createContext, useReducer, useContext } from "react";
import { SET_USER, SET_LOGGED_IN } from "./actions";

const StoreContext = createContext([]);
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.loggedIn
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    loggedIn: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
