import React from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal () {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <div>
            <p>
              Ara Toplam (0 Ürün):
              <strong>
                0
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Bu sipariş bir hediye.
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix="₺"
      />

      <button className="">Ödemeye Geç</button>
    </div>
  );
}

export default Subtotal;
