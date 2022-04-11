import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProduct'
import './SingleProd.css'
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethod'
import axios from 'axios'
import CartContext from '../../context/cart-context'

const SingleProd = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const cartCtx = useContext(CartContext);

    useEffect(() => {
        const getProduct = async ()=>{
            try {
                const res = await publicRequest.get("http://woodsy-backend.eba-uej58ayn.us-west-2.elasticbeanstalk.com/api/products/"+id);
                setProduct(res.data)
                console.log(res);
                
            } catch (error) {}
        };
        getProduct()
    },[id]);

    const addToCartHandler = () => {
        cartCtx.addProduct({...product, amount: 1});
    };
    

  return (
      <div>
        <p className="bread-crum-container">Home/Shop/Category/Product1</p>
        <div className="prod-wraper">
            <div className="imgs-container">
                {product.image && <img src={product.image} />}
                <img src={require('../../asserts/media/scatered-img (2).jpg')} alt="" />
                <img src={require('../../asserts/media/scatered-img (3).jpg')} alt="" />
                <img src={require('../../asserts/media/scatered-img (4).jpg')} alt="" />
            </div>
            <div className="prod-text-area">
                <h4 className="single-prod-name">{product.name}</h4>
                <h4 className="single-prod-price">${product.price}</h4>
                <p className="prod-id"></p>
                <p className="prod-descp">{product.description}</p>
                <button className='atc-btn' onClick={addToCartHandler} >Add to bag</button>
            </div>
        </div>
        <div className="prod-details">
            <div className="detail-text">
                <h4 className="detail-title">Description</h4>
                <p className="intro-para">An Exquisitely Hand Carved Royal Indian Elephant also known as Ambabari Elephant,this artistic wooden sculpture is completely hand crafted by skilled artisans from the rural areas of India,this Wooden Masterpiece is a great item for gifting purpose,a unique Artifact for Art Lovers,& can be a great marvel of attraction for your living rooms. wooden elephant sculptures, wooden elephant.</p>
            </div>
            <div className="prod-descp-img"><img src={require('../../asserts/media/scatered-img (4).jpg')} alt="" /></div>
        </div>
        <h4 className="sect-title">Related Products</h4>
        <FeaturedProducts />
        <Footer />
      </div>
    
  )
}

export default SingleProd