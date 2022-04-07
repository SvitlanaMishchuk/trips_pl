import { useState } from 'react';

import { IconButton } from '../../../shared/components/IconButton';

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <IconButton
        className='navigation_btn'
        iconSrc='./../../assets/hamburger-icon.png'
        iconAlt='Open menu'
        onClick={handleHamburgerMenuClick}
      />
      {isMenuOpen && (
        <div className='hamburger-menu_container'>
          <IconButton
            className='hamburger-menu_close'
            iconSrc='./../../assets/close-icon.svg'
            iconAlt='Close menu'
            iconClassName='hamburger-menu_icon'
            onClick={handleHamburgerMenuClick}
          />
        </div>
      )}
    </>
  );
};
