import React from 'react';
import '../css/BasketItem.css';
import {useDispatch, useSelector} from 'react-redux';
import * as cartActions from '../redux/actions/cartActions';

function BasketItem (props) {
  const dispatch = useDispatch ();

  const removeFromCart = product => {
    dispatch (
      cartActions.removeFromCart ({
        id: props.id,
      })
    );
  };

  return (
    <div className="basketItem">
      <img className="basketItem__image" src={props.image} alt={props.alt} />
      <div className="basketItem__info">
        <p className="basketItem__title">{props.title}</p>
        <p className="product__price">
          <small>₺</small><strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array (props.rating).fill ().map ((_, i) => <p key={i}>⭐</p>)}
        </div>
        <button className="basketItem__button" onClick={removeFromCart}>
          Sepetten Kaldır
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
