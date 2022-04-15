import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="ft-list-wrap">
        <ul className="ft-list">
          <h4 className="ft-list-title">Woodsyshop</h4>
          <li className="ft-list-item">Home</li>
          <li className="ft-list-item">Shop</li>
          <li className="ft-list-item">About Us</li>
          <li className="ft-list-item">Our Products</li>
        </ul>
        <ul className="ft-list">
          <h4 className="ft-list-title">Categories</h4>
          <li className="ft-list-item">Rings</li>
          <li className="ft-list-item">Necklaces</li>
          <li className="ft-list-item">Earrings</li>
          <li className="ft-list-item">Bracelets</li>
          <li className="ft-list-item">Bags</li>
        </ul>
        <ul className="ft-list">
          <h4 className="ft-list-title">Policies</h4>
          <li className="ft-list-item">Privacy Policy</li>
          <li className="ft-list-item">Shipping Poloicy</li>
          <li className="ft-list-item">Refund Policy</li>
        </ul>
        <ul className="ft-list">
          <h4 className="ft-list-title">Connect with Us</h4>
          <li className="ft-list-item">Facebook</li>
          <li className="ft-list-item">Instagram</li>
          <li className="ft-list-item">Pinterest</li>
          <li className="ft-list-item">Mail</li>
        </ul>
      </div>
      <div className="copy">
        <h4 className="copy-text">&copy; Copyright The Sparkle | 2022</h4>
        <h4 className="credit">Design: Aniket Bamotra</h4>
      </div>
    </footer>
  );
};

export default Footer;
