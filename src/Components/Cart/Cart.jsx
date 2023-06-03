import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Context'
import SingleProduct from '../SingleProduct/SingleProduct'
import './Cart.css'

const Cart = () => {

    const {cart, setCart} = useContext(CartContext)

    const [total, setTotal] = useState([])

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(Math.floor(curr.price*55.1)), 0))
    },[cart])

    return (
        <div className='cart-main-container'>
            <span>My Cart</span><br />
            <span>Total: ₹{total}</span><br />
            <div>{ 
            cart.map((product) => (
                <SingleProduct product={product} key={product.id} cart={cart} setCart={setCart}/>
            ))
            }</div>
            <Link className='link-tag checkout-btn' to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart
