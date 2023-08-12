import React, {useState} from 'react';
import '../css/CreditCard.css';

function CreditCard () {
  const [isFlipped, setIsFlipped] = useState (false);
  const [cardNumber, setCardNumber] = useState ('');
  const [cardHolder, setCardHolder] = useState ('');
  const [expirationDate, setExpirationDate] = useState ('');
  const [cvv, setCvv] = useState ('');

  return (
    <div className="container">
      <div className="input-container">
        <input
          placeholder="Card Number"
          value={cardNumber}
          onChange={e => setCardNumber (e.target.value)}
        />
        <input
          placeholder="Card Holder"
          value={cardHolder}
          onChange={e => setCardHolder (e.target.value)}
        />
        <input
          placeholder="Expiration Date"
          value={expirationDate}
          onChange={e => setExpirationDate (e.target.value)}
        />
        <input
          placeholder="CVV"
          value={cvv}
          onChange={e => setCvv (e.target.value)}
          onFocus={() => setIsFlipped (true)}
          onBlur={() => setIsFlipped (false)}
        />
      </div>

      <div className="card-container">
        <div className={`card ${isFlipped ? 'flipped' : ''}`}>
          <div className="card-front">
            <div>{cardNumber}</div>
            <div>{cardHolder}</div>
            <div>{expirationDate}</div>
          </div>
          <div className="card-back">
            <div>{cvv}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
