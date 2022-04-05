import { LoginButton } from './components/LoginButton';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import './styles.scss';

export const Header = () => {
  return (
    <div className='flex justify-space-between header'>
      <div className='flex justify-start'>
        <button className='btn navigation_btn'>
          <img src='./../../assets/hamburger-icon.png' alt='Open menu' />
        </button>
        <Logo />
      </div>
      <div className='flex justify-start'>
        <div className='navigation_container'>
          <Navigation />
        </div>
        <LoginButton />
      </div>
    </div>
  );
};
