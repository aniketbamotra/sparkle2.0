import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from '../Product/Product'
import './FP.css'
import { featProd } from '../../products'
import axios from 'axios'

const FeaturedProduct = () => {
  const [featProducts, setFeatProducts] = useState([]);

  useEffect(() => {
    const getFeatProducts = async () => {
      try {
        const res = await axios.get("http://woodsy-backend.eba-uej58ayn.us-west-2.elasticbeanstalk.com/api/products");
        setFeatProducts(res.data);
        console.log(res);
      } catch (err) {}
    };
    getFeatProducts();
  }, []);

  return (
      <div className="feat-prod-items">
        {featProducts.slice(0,4).map((product)=>(
            <Link key={product._id} to={`/product/${product._id}`}>
                <Product product = {product}/>
            </Link>
        ))}
      </div>
  )
}

export default FeaturedProduct