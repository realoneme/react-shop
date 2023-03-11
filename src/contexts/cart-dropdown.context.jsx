import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  let ifExist = false;
  cartItems = cartItems.map((item) => {
    if (item && item.id === productToAdd.id) {
      ifExist = true;
      return { ...item, quantity: item.quantity + 1 };
    } else {
      return item;
    }
  });
  if (!ifExist) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    return cartItems;
  }
};

export const CartToggleContext = createContext({
  status: false,
  setStatus: () => null,
  cartItems: [],
  addItemToCart: () => {},
  total: 0,
});

export const CartToggleProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  // setTotal(getTotal(cartItems));
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  useEffect(() => {
    const getTotal = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotal(getTotal);
  }, [cartItems]);
  const value = { status, setStatus, cartItems, addItemToCart, total };
  return (
    <CartToggleContext.Provider value={value}>
      {children}
    </CartToggleContext.Provider>
  );
};
