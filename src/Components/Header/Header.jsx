import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Context'
import './Header.css'
import Meesho_Logo from './meesho-logo-org.jpg'

const Header = () => {

  const {cart, setCart} = useContext(CartContext)

  return (
    <div className='header-container'>
      <Link className='link-tag' to='/'><img className='meesho-logo' src={Meesho_Logo} alt="Meesho Logo" /></Link>
      <form> <input className='header-search-input' type="text" placeholder='Search Product' /></form>
      <a className='link-tag' target="_blank" href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">Download App</a>
      <a className='link-tag' target="_blank" href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=website&utm_campaign=header">Become a Supplier</a>
      <Link to='/login' className="header-profile link-tag">Profile</Link>
      <Link className='link-tag' to='/cart'>{cart.length !== 0 ? `Cart (${cart.length})`: "Cart"}</Link>  
    </div>
  )
}

export default Header
