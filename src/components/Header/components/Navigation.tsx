import { useState } from 'react';
import { NavigationEntity } from '../../../models/NavigationEntity';
import navigation from './../../../api/navigation.json';

export const Navigation = () => {
  const [navigationMenu, setNavigationMenu] =
    useState<NavigationEntity[]>(navigation);

  const navigationList = navigationMenu.map(
    ({ id, label }: NavigationEntity) => (
      <li className='navigation_link' key={id}>
        {label}
      </li>
    )
  );
  return <ul className='flex align-center'>{navigationList}</ul>;
};
