import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from '../Header';
import { Countries } from '../Countries';
import { Home } from '../Home';

import './../../styles/index.scss';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='pt-16'>
          <Routes>
            <Route path='/countries' element={<Countries />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
