import React from 'react';
import '../css/Product.css';
import prime from '../assets/images/prime-icon.png';

function Product (props) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>₺</small><strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array (props.rating).fill ().map ((_, i) => <p>⭐</p>)}
        </div>
      </div>
      <img src={props.image} className="product__image" alt={props.alt} />
      {props.prime
        ? <img className="product__primeIcon" src={prime} alt="prime" />
        : ''}
      <button className="product__button">Sepete Ekle</button>
    </div>
  );
}

export default Product;
