import React from "react";
import "./Filter.css";

const categories = [
  { label: "All Products", value: "all" },
  { label: "Rings", value: "rings" },
  { label: "Necklace", value: "necklace" },
  { label: "Earrings", value: "earrings" },
  { label: "Bracelets", value: "bracelets" },
  { label: "Bags", value: "bags" },
];

const sortBy = [
  { label: "Best Sellers", value: "best-sellers" },
  { label: "Price: Low - High", value: "price-asc" },
  { label: "Price: High - Low", value: "price-desc" },
  { label: "Oldest to Newest", value: "oldest" },
  { label: "Newest to Oldest", value: "newest" },
];

const Filter = ({ setFilter, setSort }) => {
  return (
    <div className="filter-wrap">
      <div className="flt-sticky-container">
        <h4 className="filter-title">Categories</h4>
        <ul className="filter">
          {categories.map((category) => (
            <li
              key={category.value}
              className="filter-ele"
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </li>
          ))}
        </ul>
        <h4 className="filter-title">Sort By</h4>
        <ul className="filter">
          {sortBy.map((category) => (
            <li
              key={category.value}
              className="filter-ele"
              onClick={() => setSort(category.value)}
            >
              {category.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
