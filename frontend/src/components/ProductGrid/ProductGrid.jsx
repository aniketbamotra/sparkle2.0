import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./ProductGrid.css";
import { AllProd } from "../../products";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductGrid = ({ filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://woodsy-backend.eba-uej58ayn.us-west-2.elasticbeanstalk.com/api/products");
        setProducts(res.data);
        console.log(res);
      } catch (err) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(products);
      return;
    }
    setFilteredProducts(
      products.filter((product) => product.category === filter)
    );
  }, [filter, products]);

  useEffect(() => {
    if (sort === "best-sellers") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.numberOfItemsSold - a.numberOfItemsSold)
      );
    } else if (sort === "price-asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "price-desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (sort === "oldest") {
      setFilteredProducts((prev) =>
        [...prev].sort(
          (a, b) => new Date(a.addedToCartAt) - new Date(b.addedToCartAt)
        )
      );
    } else if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort(
          (a, b) => new Date(b.addedToCartAt) - new Date(a.addedToCartAt)
        )
      );
    }
  }, [sort]);

  return (
    <div className="grid-wrap">
      {filteredProducts.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <Product product={product} />
          </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
