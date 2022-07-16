import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './pages/Home/components/Header';
import { Countries } from './pages/Countries';
import { Regions } from './pages/Regions';
import { Home } from './pages/Home';

import './styles/index.scss';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='pt-16'>
          <Routes>
            <Route path='/regions' element={<Regions />} />
            <Route path='/countries' element={<Countries />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
