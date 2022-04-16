import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import "./Store.css";
import Filter from "../../components/Filter/Filter";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const Store = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [totalProduct, setTotalProduct] = useState("");

  const getTotalProduct = (productNum) => {
    setTotalProduct(productNum);
  };

  return (
    <div>
      <h1 className="page-title">Store</h1>
      <div className="search-wrap">
        <p className="total-prod-no">{totalProduct} Products</p>
        <input type="text" placeholder="Search" className="search-container" />
      </div>
      <div className="store-body">
        <Filter setFilter={setFilter} setSort={setSort} />
        <ProductGrid
          filter={filter}
          sort={sort}
          getTotalProduct={getTotalProduct}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
