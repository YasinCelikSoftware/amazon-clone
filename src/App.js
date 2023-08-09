import './App.css';
import NotFound from './NotFound';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';

function App () {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sepet" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
