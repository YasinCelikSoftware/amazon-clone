import React from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useSelector} from 'react-redux';

function Subtotal () {
  const cart = useSelector (state => state.cartReducer);
  const sum = cart.reduce ((sum, product) => sum + product.price, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <div>
            <p>
              Ara Toplam ({cart.length}):
              <strong>
                {value}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Bu sipariş bir hediye.
            </small>
          </div>
        )}
        decimalScale={2}
        value={sum}
        displayType="text"
        thousandSeparator={true}
        prefix="₺"
      />

      <button className="">Ödemeye Geç</button>
    </div>
  );
}

export default Subtotal;
