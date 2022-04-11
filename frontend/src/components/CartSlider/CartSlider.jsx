import React, { useContext } from "react";
import { Add, Close, Remove } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import "./CartSlider.css";
import CartContext from "../../context/cart-context";

const CartSlider = (props) => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const cartItemDecrease = (id) => {
    cartCtx.removeProduct(id);
  };

  const cartItemIncrease = (item) => {
    cartCtx.addProduct({ ...item, amount: 1 });
  };

  const cartItemRemove = (productId) => {
    cartCtx.clearProduct(productId);
  };

  const redirectToCheckout = () => {
    props.toggleCart();
    navigate("/checkout");
  };

  // const totalPlusTax = cartCtx.totalAmount+(cartCtx.totalAmount*8.8/100);
  // const priceRounded = Math.round((totalPlusTax + Number.EPSILON) * 100) / 100;

  return (
    <div className={`cart ${props.isCartActive && "open-cart"}`}>
      <p className="cart-sect-title">Order Summary</p>
      <div className="cart-items-wrap">
        {cartCtx.products.map((product) => (
          <div key={product._id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <h4 className="cart-item-name">{product.name}</h4>
            <p className="cart-item-price">{"$" + product.price}</p>
            <div className="qnty-btn">
              <Remove
                className="minus"
                onClick={() => cartItemDecrease(product._id)}
              />
              <p className="qnty-no">{product.amount}</p>
              <Add className="plus" onClick={() => cartItemIncrease(product)} />
            </div>
            <Close
              className="dlt-item"
              onClick={() => cartItemRemove(product._id)}
            />
          </div>
        ))}

        <div className="cart-subtotal">
          <p className="cart-sect-title">Sub-Total</p>
          <p className="subtotal-price">{"$" + cartCtx.totalAmount}</p>
        </div>
        <div className="cart-btn-container">
          <button className="shoping" onClick={props.toggleCart}>
            Continue Shoping
          </button>
          <button className="ctc" onClick={redirectToCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;
