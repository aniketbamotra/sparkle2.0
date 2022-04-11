import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../requestMethods'

const Product = ({ product }) => {

  return (
    <div className="prod-wrap">
        <div>
            <img src={product.image} alt="" />
            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">${product.price}</p>
        </div>
    </div>
  )
}

export default Product