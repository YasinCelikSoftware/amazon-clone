import './App.css';
import NotFound from './NotFound';
import Header from './components/Header';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';

function App () {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<><Header />
          <Home /></>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
