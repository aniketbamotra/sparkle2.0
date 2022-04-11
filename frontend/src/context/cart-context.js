import { createContext } from "react";

const CartContext = createContext({
  products: [],
  totalAmount: 0,
  addProduct: (product) => {},
  removeProduct: (productId) => {},
  clearProduct: (productId) => {},
});

export default CartContext;
