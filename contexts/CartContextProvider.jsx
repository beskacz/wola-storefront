import React, { useState, useMemo, useEffect } from 'react';
import CartContext from './CartContext';

function CartContextProvider({ children }) {
  const cartContentMemo = useMemo(() => {
    try {
      return JSON.parse(window.localStorage.getItem('cart-content')) || {};
    } catch (e) {
      return {};
    }
  }, []);

  const [items, setItems] = useState(cartContentMemo.items || []);
  const [itemsById, setItemsById] = useState(cartContentMemo.itemsById || {});
  const totalItems = Object.values(itemsById)
    .filter(Boolean)
    .reduce((m, c) => m + c.qty, 0);
  const total = Object.values(itemsById)
    .filter(Boolean)
    .reduce((m, c) => m + c.qty * c.data.price * 100, 0);

  const addItem = (id, data) => {
    const newItems = [...items];
    const newItemsById = { ...itemsById };

    if (!items.includes(id)) {
      newItems.push(id);
    }

    newItemsById[id] = newItemsById[id] || { qty: 0 };
    newItemsById[id] = {
      data,
      qty: newItemsById[id].qty + 1,
    };

    setItems(newItems);
    setItemsById(newItemsById);
    try {
      window.localStorage.setItem(
        'cart-content',
        JSON.stringify({ items: newItems, itemsById: newItemsById }),
      );
    } catch (e) {}
  };

  const changeQty = (id, qty) => {
    let numberQty = parseInt(qty, 10);
    numberQty = Number.isNaN(numberQty) ? 1 : numberQty;
    numberQty = numberQty === 0 ? 1 : numberQty;
    const newItemsById = {
      ...itemsById,
      [id]: {
        ...itemsById[id],
        qty: numberQty,
      },
    };
    setItemsById(newItemsById);
    window.localStorage.setItem(
      'cart-content',
      JSON.stringify({ items, itemsById: newItemsById }),
    );
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item !== id);
    const newItemsById = {
      ...itemsById,
      [id]: undefined,
    };
    setItems(newItems);
    setItemsById(newItemsById);
    try {
      window.localStorage.setItem(
        'cart-content',
        JSON.stringify({ items: newItems, itemsById: newItemsById }),
      );
    } catch (e) {}
  };

  const clear = () => {
    setItems([]);
    setItemsById({});
    try {
      window.localStorage.setItem(
        'cart-content',
        JSON.stringify({ items: [], itemsById: {} }),
      );
    } catch (e) {}
  };

  useEffect(() => {
    window.bacarteCart = {
      items,
      itemsById,
      addItem,
      changeQty,
      totalItems,
      removeItem,
      total,
      clear,
    };
  }, []);
console.log({totalItems})
  return (
    <CartContext.Provider
      value={{
        items,
        itemsById,
        addItem,
        changeQty,
        totalItems,
        removeItem,
        total,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
