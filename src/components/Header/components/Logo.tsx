import { ComponentProps } from 'react';

export const Logo = ({ className }: ComponentProps<'img'>) => {
  return (
    <img
      src='./../../../assets/logo.png'
      className={`logo ${className}`}
      alt='Trips Plan'
    />
  );
};
