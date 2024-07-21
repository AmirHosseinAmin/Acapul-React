import React, { useReducer } from "react";
import { ProductContext } from "./productContext";

const defaultProductState = {
  items: [],
  totalAmount: 0,
};

const ProductReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultProductState;
};

export const ProductProvider = (props) => {
  const [productstate, dispatchProductAction] = useReducer(
    ProductReducer,
    defaultProductState
  );

  const addItemToCartHandler = (item) => {
    dispatchProductAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchProductAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: productstate.items,
    totalAmount: productstate.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <ProductContext.Provider value={cartContext}>
      {props.children}
    </ProductContext.Provider>
  );
};
