import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationEntity } from '../../../models/NavigationEntity';
import navigation from './../../../api/navigation.json';

interface NavigationProps {
  containerClassName?: string;
  navigationItemClassName?: string;
}

export const Navigation = ({
  containerClassName,
  navigationItemClassName = '',
}: NavigationProps) => {
  const [navigationMenu, setNavigationMenu] =
    useState<NavigationEntity[]>(navigation);

  const navigationList = navigationMenu.map(
    ({ id, label, link }: NavigationEntity) => (
      <NavLink
        to={link}
        className={`px-8 font-light ${navigationItemClassName}`}
      >
        {label}
      </NavLink>
    )
  );
  return <ul className={`flex ${containerClassName}`}>{navigationList}</ul>;
};
