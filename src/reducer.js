const reducer = (state, action) => {
  if (action.type === "CHECKOUT") {
    alert("Checkout?");
    return { ...state, cart: [] };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => {
      return item.id !== action.payload;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE") {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, item) => {
        const { amount, price } = item;
        cartTotal.amount += amount;
        cartTotal.total += amount * price;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newCart };
  }

  throw new Error("no matching action type");
};

export default reducer;
