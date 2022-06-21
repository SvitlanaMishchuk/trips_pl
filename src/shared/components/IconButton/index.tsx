import { ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

interface IconButtonProps extends ComponentProps<'button'> {
  icon: IconDefinition;
  iconClassName?: string;
  className?: string;
}

export const IconButton = ({
  icon,
  iconClassName,
  className,
  ...rest
}: IconButtonProps) => {
  return (
    <>
      <button className={`button icon-button ${className}`} {...rest}>
        <FontAwesomeIcon icon={icon} />
        <i className='fas fa-bars'></i>
      </button>
    </>
  );
};
