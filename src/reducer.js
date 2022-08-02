const reducer = (state, action) => {
  if (action.type === "CHECKOUT") {
    alert(`Checkout ${state.amount} Items?`);
    return { ...state, cart: [] };
  }

  if (action.type === "ADD_TO_CART") {
    let newCart = [];
    const isItemInCart = state.cart.find(
      (item) => item.id === action.payload.item.id
    );

    if (isItemInCart) {
      if (
        isItemInCart.color === action.payload.color &&
        isItemInCart.size === action.payload.size
      ) {
        newCart = state.cart.map((item) =>
          item.id === action.payload.item.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newCart = [
          ...state.cart,
          {
            ...action.payload.item,
            color: action.payload.color,
            size: action.payload.size,
            quantity: action.payload.quantity,
          },
        ];
      }
    } else {
      newCart = [
        ...state.cart,
        {
          ...action.payload.item,
          color: action.payload.color,
          size: action.payload.size,
          quantity: action.payload.quantity,
        },
      ];
    }
    return { ...state, cart: newCart };
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
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    return { ...state, cart: newCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, item) => {
        const { quantity, price } = item;
        cartTotal.amount += quantity;
        cartTotal.total += quantity * price;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    console.log(action.payload.type);
    let newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...item, quantity: item.quantity + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    return { ...state, cart: newCart };
  }

  throw new Error("no matching action type");
};

export default reducer;
