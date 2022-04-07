import { ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<'button'> {
  iconSrc: string;
  iconAlt: string;
  iconClassName?: string;
  className?: string;
}

export const IconButton = ({
  iconSrc,
  iconAlt,
  iconClassName,
  className,
  ...rest
}: IconButtonProps) => {
  return (
    <button className={`btn ${className}`} {...rest}>
      <img src={iconSrc} alt={iconAlt} className={iconClassName} />
    </button>
  );
};
