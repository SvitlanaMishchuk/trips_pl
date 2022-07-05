import { Header } from '../Header';
import { Foreword } from '../Foreword';
import './index.scss';

export const App = () => {
  return (
    <div className='app_container'>
      <Header />
      <Foreword />
    </div>
  );
};
