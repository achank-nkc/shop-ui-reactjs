import React, { useContext, useEffect, useReducer } from "react";
import { cartItems, popularProducts } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {
  itemsClothing: popularProducts,
  cart: cartItems,
  amount: 0,
  total: 0,
  size: "",
  color: "",
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
