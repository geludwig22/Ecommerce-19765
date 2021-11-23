import React, { useContext, createContext, useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';



const CartContext = createContext();


export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  const addItem = (item, count) => {
    if (isInCart(item)) {
      let newCart = cart;
      newCart.forEach((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.count += count;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, ItemCount }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (item) => {
    return cart.some((cartItem) => cartItem.id === item.id);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;