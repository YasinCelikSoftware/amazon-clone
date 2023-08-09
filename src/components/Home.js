import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home () {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/6122dhDXg-L._SX3000_.jpg"
          alt="Amazon Background"
        />
        <div className="home__row">
          <Product
            title="The Lean Startup"
            price={19.99}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
            alt="Lean Startup"
          />
          <Product
            title="İnsanlığımı Yitirirken"
            price={24.78}
            image="https://images-eu.ssl-images-amazon.com/images/I/61m8F3-+CrL._AC_UL160_SR160,160_.jpg"
            rating={5}
            prime={true}
            alt="İnsanlık"
          />

        </div>
        <div className="home__row">
          <Product
            title="HyperX QuadCast Oyun Mikrofonu HX-MICQC-BK"
            price="2.300,87"
            image="https://images-eu.ssl-images-amazon.com/images/I/71fvNPxUldL._AC_UL450_SR450,320_.jpg"
            rating={5}
            alt="Mikrofon"
          />
          <Product
            title="Klavye Fırçası, Kulaklık Temizleyici"
            price="89,00"
            image="https://images-eu.ssl-images-amazon.com/images/I/61XGpbqHenL._AC_UL450_SR450,320_.jpg"
            rating={4}
            alt="Fırça"
          />
          <Product
            title="Philips HD9650/90 Airfryer XXL Fritöz"
            price="5.998,99"
            image="https://images-eu.ssl-images-amazon.com/images/I/41Zetcz6xWL._AC_UL450_SR450,320_.jpg"
            rating={4}
            alt="Fritöz"
          />

        </div>
        <div className="home__row">
          <Product
            title="HyperX Cloud II Gaming Kulaklık KHX-HSCP-RD Kırmızı"
            price="1.998,90"
            image="https://m.media-amazon.com/images/I/31Oot+LHbsL._AC_SY164_.jpg"
            rating={4}
            alt="Cloud II"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
