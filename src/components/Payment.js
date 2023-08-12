import React from 'react';
import {useSelector} from 'react-redux';
import BasketItem from './BasketItem';
import '../css/Payment.css'
import { Link } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Payment () {
  const user = useSelector (state => state.userReducer);
  const cart = useSelector(state => state.cartReducer);

  const [animation] = useAutoAnimate ();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Sepet (<Link  to="/sepet">{cart.length} Ürün</Link>)</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__address">
            <p>{user?._delegate.email}</p>
            <p>Güneşli 1354 24/2</p>
            <p>İstanbul, Türkiye</p>
          </div>
        </div>
        <div className="payment__section">
            <div className='payment__title'>
                <h3>Ürünleri İncele ve Sipariş Ver</h3>
            </div>
            <div ref={animation} className='payment__items'>
                {cart.map(product => (
                    <BasketItem 
                    key={Math.random () * 10}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                    />
                ))}
            </div>
        </div>
        <div className="payment__section">
            <div className='payment__title'>
                <h3>Ödeme Yöntemi</h3>
            </div>
            <div className='payment__details'>
                {/* Stirpe Magic */}
            </div>
        </div>
        
        {/* {Ürünleri İncele} */}
        {/* {Ödeme Seçeneği} */}
      </div>
    </div>
  );
}

export default Payment;
