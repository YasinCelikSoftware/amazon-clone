import React from 'react';
import '../css/Checkout.css';
import Subtotal from './Subtotal';
import {useSelector} from 'react-redux';
import BasketItem from './BasketItem';

function Checkout () {
  const cart = useSelector (state => state.cartReducer);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt="Reklam"
        />
        <div>
          <h2 className="checkout__title">Alışveriş Sepetiniz</h2>
          {cart.map (product => (
            <BasketItem
              key={Math.random () * 10}
              id={product.id}
              title={product.title}
              alt={product.alt}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
