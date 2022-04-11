import React from 'react'
import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import './Checkout.css'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import UserDetails from '../../components/userDetails/UserDetails'



const Checkout = () => {
    const [showForm, setShowForm] = useState(true)
    const toggleForm = () => {
        setShowForm(prev => !prev) 
    }
  return (
    <div>
        <div className="checkout-wrap">
            {showForm ? <CheckoutForm toggleForm={toggleForm} /> : <UserDetails toggleForm={toggleForm} />}
            <OrderDetails />
        </div>
        <Footer />
    </div>
  )
}

export default Checkout