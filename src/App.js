import './App.css';
import NotFound from './NotFound';
import PageLayout from './PageLayout';
import Checkout from './components/Checkout';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import {useEffect} from 'react';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import * as userActions from './redux/actions/userActions';

function App () {
  const dispatch = useDispatch ();

  useEffect (() => {
    auth.onAuthStateChanged (authUser => {
      console.log ('THE USER IS -> ', authUser);
      if (authUser) {
        dispatch (userActions.setUser (authUser));
      } else {
        dispatch (userActions.setUser (null));
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sepet" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />;
        <Route path="*" element={<NotFound />} />;
      </Routes>
    </div>
  );
}

export default App;
