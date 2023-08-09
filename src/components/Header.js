import React from 'react';
import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

function Header () {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />

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
        <div className="header__option">
          <span className="header__optionLineOne">Merhaba, Giriş yapın</span>
          <span className="header__optionLineTwo">Hesap ve Listeler</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">İadeler</span>
          <span className="header__optionLineTwo">ve Siparişler</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon className="header__basketIcon" />
          <span className="header__basketCount header__optionLineTwo">0</span>
        </div>
      </div>

    </div>
  );
}

export default Header;
