import React, { useContext } from 'react';

const CartContext = React.createContext({
  items: [],
  itemsById: {},
});

export default CartContext;

export function useCart() {
  return useContext(CartContext);
}