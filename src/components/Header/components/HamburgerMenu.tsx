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
        <div className='hamburger-menu_container'>
          <div className='flex'>
            <IconButton
              className='hamburger-menu_close'
              icon={faXmark}
              onClick={handleHamburgerMenuClick}
            />
            <Logo className='hamburger-menu_logo' />
          </div>
          <div>
            <Navigation
              containerClassName={'direction-column'}
              navigationItemClassName={'hamburger-menu_item'}
            />
          </div>
        </div>
      )}
    </>
  );
};
