import React from 'react';
import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Header () {
  const cart = useSelector (state => state.cartReducer);
  const user = useSelector (state => state.userReducer);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header__nav">
        <PlaceOutlinedIcon className="header__optionLocation" />
        <div className="header__option">
          <span className="header__optionLineOne">Merhaba</span>
          <span className="header__optionLineTwo">Teslimat Adresini Seçin</span>
        </div>
      </div>

      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">
              Merhaba,
              {' '}
              {user === null || user._delegate === undefined
                ? 'Giriş Yapın'
                : user._delegate.email}
            </span>
            <span className="header__optionLineTwo">Hesap ve Listeler</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">İadeler</span>
          <span className="header__optionLineTwo">ve Siparişler</span>
        </div>

        <div className="header__optionBasket">
          <Link to="/sepet">
            <ShoppingBasketIcon className="header__basketIcon" />
          </Link>
          <span className="header__basketCount header__optionLineTwo">
            {cart.length}
          </span>
        </div>
      </div>

    </div>
  );
}

export default Header;
