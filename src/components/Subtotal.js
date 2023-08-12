import React from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useSelector} from 'react-redux';
import {getCartTotal} from '../redux/reducers/cartReducer';
import {useNavigate} from 'react-router-dom';

function Subtotal () {
  const cart = useSelector (state => state.cartReducer);
  const navigate = useNavigate ();

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
        value={getCartTotal (cart)}
        displayType="text"
        thousandSeparator={true}
        prefix="₺"
      />

      <button onClick={e => navigate ('/odeme')}>
        Ödemeye Geç
      </button>
    </div>
  );
}

export default Subtotal;
