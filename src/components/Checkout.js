import React from 'react';
import '../css/Checkout.css';
import Subtotal from './Subtotal';

function Checkout () {
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

        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
