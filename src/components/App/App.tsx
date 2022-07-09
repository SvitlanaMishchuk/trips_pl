import { Header } from '../Header';
import { Foreword } from '../Foreword';
import { HowItWorks } from '../HowItWorks';
import { Geography } from '../Geography';
import { Footer } from '../Footer';

import './index.scss';

export const App = () => {
  return (
    <div className='app_container'>
      <Header />
      <Foreword />
      <HowItWorks />
      <Geography />
      <Footer />
    </div>
  );
};
