import { useState } from 'react';

import { IconButton } from '../../../shared/components/IconButton';

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
      {isMenuOpen && (
        <div className='hamburger-menu_container'>
          <IconButton
            className='hamburger-menu_close'
            icon={faXmark}
            onClick={handleHamburgerMenuClick}
          />
        </div>
      )}
    </>
  );
};
