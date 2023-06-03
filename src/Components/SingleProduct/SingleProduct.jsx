import React, { useContext } from 'react';
import { CartContext } from '../../Context/Context';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {  

  const {cart, setCart} = useContext(CartContext);

    console.log(cart);
    const { id, price, title, description, rating, image } = product;
  return (
    <div className="single-product">
      <div className="product-image">
        <img src={image} alt="Product Image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{title.slice(0, 30)}</h3>
        <p className="product-price">Price: ₹{Math.floor((price * 82.65) / 1.5)}</p>
        {/* <p className="product-description">{description}</p> */}
        {/* <p className="product-rating">Rating: {rating.rate}</p> */}
        {cart.includes(product)?
        <button className='add-to-cart-button' onClick={()=> {setCart(cart.filter((c) => c.id !== product.id))}}>Remove From Cart</button>:
        <button className='add-to-cart-button' onClick={()=> {setCart([...cart, product])}}>Add to Cart</button>}
      </div>
    </div>
  );
};

export default SingleProduct;
