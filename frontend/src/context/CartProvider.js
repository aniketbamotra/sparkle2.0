import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  products: [],
  totalAmount: 0,
};

const saveCartOnLocal = (cartState) => {
  localStorage.setItem("cartState", JSON.stringify(cartState));
};

const getLocalCartState = () => {
  const state = JSON.parse(localStorage.getItem("cartState"));
  if (state) return { ...state, totalAmount: +state.totalAmount };
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const currProduct = action.payload;
    const updatedTotalAmount =
      state.totalAmount + currProduct.price * currProduct.amount;

    console.log(updatedTotalAmount);

    const existingCartProductIndex = state.products.findIndex(
      (product) => product._id === currProduct._id
    );
    const existingCartProduct = state.products[existingCartProductIndex];

    let updatedProducts;
    if (existingCartProduct) {
      const updatedProduct = {
        ...existingCartProduct,
        amount: existingCartProduct.amount + currProduct.amount,
      };
      updatedProducts = [...state.products];
      updatedProducts[existingCartProductIndex] = updatedProduct;
    } else {
      updatedProducts = state.products.concat(currProduct);
    }

    const cartState = {
      products: updatedProducts,
      totalAmount: Math.round((updatedTotalAmount + Number.EPSILON) * 100) / 100,
    };

    saveCartOnLocal(cartState);
    return cartState;
  }

  if (action.type === "REMOVE") {
    const currProductId = action.payload;
    const existingCartProductIndex = state.products.findIndex(
      (product) => product._id === currProductId
    );
    const existingCartProduct = state.products[existingCartProductIndex];
    const updatedTotalAmount = state.totalAmount - existingCartProduct.price;

    let updatedProducts;
    if (existingCartProduct.amount === 1) {
      updatedProducts = state.products.filter(
        (product) => product._id !== currProductId
      );
    } else {
      const updatedProduct = {
        ...existingCartProduct,
        amount: existingCartProduct.amount - 1,
      };
      updatedProducts = [...state.products];
      updatedProducts[existingCartProductIndex] = updatedProduct;
    }

    const cartState = {
      products: updatedProducts,
      totalAmount: Math.round((updatedTotalAmount + Number.EPSILON) * 100) / 100,
    };

    saveCartOnLocal(cartState);
    return cartState;
  }

  if (action.type === "REMOVE_ITEM") {
    const currProductId = action.payload;
    const updatedProducts = state.products.filter(
      (product) => product._id !== currProductId
    );
    const existingCartProductIndex = state.products.findIndex(
      (product) => product._id === currProductId
    );
    const existingCartProduct = state.products[existingCartProductIndex];
    const updatedTotalAmount =
      state.totalAmount -
      existingCartProduct.price * existingCartProduct.amount;

    const cartState = {
      products: updatedProducts,
      totalAmount: Math.round((updatedTotalAmount + Number.EPSILON) * 100) / 100,
    };

    saveCartOnLocal(cartState);
    return cartState;
  }

  return getLocalCartState() ? getLocalCartState() : defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    getLocalCartState() ? getLocalCartState() : defaultCartState
  );

  console.log(cartState);

  const addProductToCartHandler = (product) => {
    dispatchCartAction({
      type: "ADD",
      payload: product,
    });
  };

  const removeProductFromCartHandler = (productId) => {
    dispatchCartAction({
      type: "REMOVE",
      payload: productId,
    });
  };

  const clearProductFromCart = (productId) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      payload: productId,
    });
  };

  const cartContext = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addProduct: addProductToCartHandler,
    removeProduct: removeProductFromCartHandler,
    clearProduct: clearProductFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
