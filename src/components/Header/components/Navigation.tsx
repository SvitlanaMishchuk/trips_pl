import { useState } from 'react';
import { NavigationEntity } from '../../../models/NavigationEntity';
import navigation from './../../../api/navigation.json';

interface NavigationProps {
  containerClassName?: string;
  navigationItemClassName?: string;
}

export const Navigation = ({
  containerClassName,
  navigationItemClassName,
}: NavigationProps) => {
  const [navigationMenu, setNavigationMenu] =
    useState<NavigationEntity[]>(navigation);

  const navigationList = navigationMenu.map(
    ({ id, label }: NavigationEntity) => (
      <li className={`navigation_link ${navigationItemClassName}`} key={id}>
        {label}
      </li>
    )
  );
  return <ul className={`flex ${containerClassName}`}>{navigationList}</ul>;
};
