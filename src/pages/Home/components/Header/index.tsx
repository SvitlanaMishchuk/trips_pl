import { HamburgerMenu } from './components/HamburgerMenu';
import { LoginButton } from './components/LoginButton';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';

export const Header = () => {
  return (
    <div className='flex justify-between header h-16 w-full fixed shadow-md shadow-shadow-300/5 z-10 bg-secondary'>
      <div className='flex justify-start items-center ml-8'>
        <HamburgerMenu />
        <Logo />
      </div>
      <div className='flex justify-start'>
        <div className='hidden lg:block'>
          <Navigation containerClassName={'items-center h-full'} />
        </div>
        <LoginButton />
      </div>
    </div>
  );
};
