import React from 'react';
import {Link} from 'react-router-dom';
import './css/NotFound.css';

function NotFound () {
  return (
    <div className="notfound">
      <Link className="notfound__logo" to="/">
        <img
          src="https://m.media-amazon.com/images/G/41/x-locale/common/small-logo._CB485945559_.gif"
          alt="Amazon Logo"
        />
      </Link>
      <div className="notfound__container">
        <img
          className="notfound__questionMark"
          src="https://m.media-amazon.com/images/G/41/x-locale/common/kailey-kitty._CB485935150_.gif"
          alt="Question Mark"
        />
        <div className="notfound__info">
          <p className="notfound__lineOne">Bir şey mi arıyorsunuz?</p>
          <p className="notfound__lineTwo">
            Üzgünüz. Girdiğiniz web adresi sitemizde çalışan bir sayfa değil.
          </p>
          <div className="notfound__return">
            <img
              className="notfound__rightArrow"
              src="https://m.media-amazon.com/images/G/41/x-locale/common/orange-arrow._CB485934075_.gif"
              alt="Right Arrow"
            />
            <p>
              <strong>
                Amazon.com.tr <Link to="/">Ana</Link> Sayfası'na git
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
