import React from 'react';
import '../css/Product.css';
import prime from '../assets/images/prime-icon.png';
import {useDispatch, useSelector} from 'react-redux';
import * as cartActions from '../redux/actions/cartActions';

function Product (props) {
  const dispatch = useDispatch ();

  const addToCart = product => {
    dispatch (
      cartActions.addToCart ({
        id: props.id,
        title: props.title,
        image: props.image,
        rating: props.rating,
        alt: props.alt,
        price: props.price,
      })
    );
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>₺</small><strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array (props.rating).fill ().map ((_, i) => <p key={i}>⭐</p>)}
        </div>
      </div>
      <img src={props.image} className="product__image" alt={props.alt} />
      {props.prime
        ? <img className="product__primeIcon" src={prime} alt="prime" />
        : ''}
      <button onClick={addToCart} className="product__button">
        Sepete Ekle
      </button>
    </div>
  );
}

export default Product;
