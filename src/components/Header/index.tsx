import { LoginButton } from './components/LoginButton';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import './styles.scss';

export const Header = () => {
  return (
    <div className='flex justify-space-between header'>
      <Logo />
      <div className='flex justify-start'>
        <Navigation />
        <LoginButton />
      </div>
    </div>
  );
};
