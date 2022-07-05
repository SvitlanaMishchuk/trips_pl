import { ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconButtonProps extends ComponentProps<'button'> {
  icon: IconDefinition;
  size?: SizeProp;
  iconClassName?: string;
  className?: string;
}

export const IconButton = ({
  icon,
  iconClassName,
  className,
  size = '1x',
  ...rest
}: IconButtonProps) => {
  return (
    <>
      <button className={`button icon-button ${className}`} {...rest}>
        <FontAwesomeIcon icon={icon} size={size} />
      </button>
    </>
  );
};
