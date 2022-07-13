import { useState } from 'react';

import { IconButton } from '../../../shared/components/IconButton';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <IconButton icon={faBars} onClick={handleHamburgerMenuClick} />
      {/*   Mobile navigation */}
      {isMenuOpen && (
        <div className='w-2/5 min-w-62 h-full fixed top-0 left-0 bg-secondary lg:hidden'>
          <div className='flex'>
            <IconButton
              className='pr-2 pl-8'
              icon={faXmark}
              onClick={handleHamburgerMenuClick}
            />
            <Logo className='-mt-[3px] -ml-[2px]' />
          </div>
          <div>
            <Navigation
              containerClassName={'flex-col'}
              navigationItemClassName={
                'my-2 mx-5 py-4 px-1 leading-5 border-b border-dark-secondary'
              }
            />
          </div>
        </div>
      )}
    </>
  );
};
