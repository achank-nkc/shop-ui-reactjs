import React, { useContext, useEffect, useReducer } from "react";
import { popularProducts } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {
  products: popularProducts,
  cart: [],
  amount: 0,
  total: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item, color, size, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { item, color, size, quantity } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };
  const checkout = () => {
    dispatch({ type: "CHECKOUT" });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeItem,
        increase,
        decrease,
        toggleAmount,
        checkout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
