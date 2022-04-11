import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import "./OrderDetails.css";

const OrderDetails = (props) => {
  const cartCtx = useContext(CartContext);
  const userShippingDetails = JSON.parse(localStorage.getItem("shippingDetails"));
  console.log(userShippingDetails);
  const totalPlusTax = cartCtx.totalAmount+(cartCtx.totalAmount*8.8/100);
  const priceRounded = Math.round((totalPlusTax + Number.EPSILON) * 100) / 100;
  const shippingPrice = userShippingDetails?.shipping==10?10:userShippingDetails?.shipping==20?20:0;
  const totalRoundedPrice = priceRounded + (+shippingPrice);

  return (
    <div className="order-wrap">
      <div className="order-items">
        {cartCtx.products.map((product) => (
          <div key={product._id} className="order-item">
            <img
              src={product.image}
              alt={product.name}
            />
            <h4 className="order-item-name">{product.name}</h4>
            <p className="order-item-price">{"$" + product.price}</p>
            <div className="qnty">
              <p className="qnty-text">Quantity</p>
              <p className="qnty-no">{product.amount}</p>
            </div>
          </div>
        ))}
        <div className="order-sub-total">
          <p className="order-price-text">Sub-Total incl. tax</p>
          <p className="order-price-text order-amt">{"$" + priceRounded}</p>
        </div>
        <div className="order-ship-total">
          <p className="order-price-text">Shipping</p>
          <p className="order-price-text order-amt">{"$" + shippingPrice}</p>
        </div>
        <div className="order-total">
          <p className="order-price-text">Total</p>
          <p className="order-total-price order-amt">{"$" + totalRoundedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
