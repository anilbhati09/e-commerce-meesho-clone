import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'
import SingleProduct from '../SingleProduct/SingleProduct';
import { CartContext } from '../../Context/Context';

const Home = () => {

  const {cart, setCart} = useContext(CartContext)

  const [data, setData] = useState([]);


  const URL = 'https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products'

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setData(res.data)
      })
  }, [])

  // console.log(cart)


  return (
    <div className="App">
      <div className="grid">
        {data.map((product) => {
          <SingleProduct product={product} key={product.id}/>
          const { id, title, price, image, rating } = product;
          return (
            <div className="card" key={id}>
              <div className="image-container">
                <img className='data-img' src={image} alt="Product Images" />
                <h3>{title.slice(0, 30)}</h3>
                <h4>₹{Math.floor((price * 82.65) / 1.5)}</h4>
                <p className="rating">{rating.rate}</p>
                {cart.includes(product) ?
                  <button className='add-to-cart-button' onClick={() => { setCart(cart.filter((c) => c.id !== product.id)) }}>Remove From Cart</button> :
                  <button className='add-to-cart-button' onClick={() => { setCart([...cart, product]) }}>Add to Cart</button>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Home
