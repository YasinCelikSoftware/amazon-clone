import React, {useState} from 'react';
import '../css/Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../firebase';

function Login () {
  let navigate = useNavigate ();
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const signIn = e => {
    e.preventDefault ();

    auth
      .signInWithEmailAndPassword (email, password)
      .then (auth => {
        if (auth) {
          alert ('Başarıyla giriş yapıldı.');
          navigate ('/');
        }
      })
      .catch (err => {
        alert ('Kullanıcı adı veya şifreniz yanlış.');
      });
  };

  const signUp = e => {
    e.preventDefault ();

    auth
      .createUserWithEmailAndPassword (email, password)
      .then (auth => {
        console.log (auth);
        if (auth) {
          navigate ('/');
        }
      })
      .catch (error => alert (error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://m.media-amazon.com/images/G/41/x-locale/common/small-logo._CB485945559_.gif"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Giriş Yap</h1>
        <form>
          <h5>E-posta</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail (e.target.value)}
          />

          <h5>Şifre</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword (e.target.value)}
          />

          <button className="login__signInButton" onClick={signIn}>
            Giriş Yap
          </button>
        </form>
        <p>
          Oturum açarak, Amazon Clone'un Kullanım ve Satış Koşulları'nı kabul etmiş olursunuz. Kişisel verilerinizin Amazon tarafından nasıl işlendiğine ilişkin detaylı bilgi için Gizlilik Bildirimi, Çerez Bildirimi ve İlgi Alanına Dayalı Tanıtımları inceleyebilirsiniz.
        </p>
      </div>

      <div className="login__signUp">
        <p className="login__signUpTitle">Amazon hesabınız yok mu?</p>
      </div>
      <button onClick={signUp} type="submit" className="login__signUpButton">
        Amazon hesabınızı oluşturun
      </button>

    </div>
  );
}

export default Login;
