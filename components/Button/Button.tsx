import React from 'react';
import classNames from 'classnames';
import { ButtonType } from '../../@types/button.types';
import { IconType } from 'react-icons';
import Link from 'next/link';

const Button = ({
  variant,
  text,
  extraClasses,
  href,
  asLink,
  iconLeft,
  onClick,
}: ButtonType) => {
  let classes = classNames(
    'flex items-center justify-center text-3xs leading-4xs px-14 py-4',
    {
      'primary bg-blue-primary': variant.includes('primary'),
      'secondary bg-green-primary': variant.includes('secondary'),
      'tertiary bg-dark-primary': variant.includes('tertiary'),
      'outline bg-transparent rounded': variant.includes('outline'),
      'square ': variant.includes('square'),
      'rounded rounded': variant.includes('rounded'),
      'fullRounded rounded-full': variant.includes('fullRounded'),
      'text-white': !variant.includes('outline'),
      'text-blue-primary': variant == 'primary-outline',
      'text-green-primary': variant == 'secondary-outline',
      'text-dark-primary': variant == 'tertiary-outline',
    },
    extraClasses,
  );
  const IconLeft = iconLeft as IconType;
  return asLink ? (
    <Link href={href ? href : ''}>
      <a className={classes} onClick={onClick}>
        {iconLeft && <IconLeft className="mr-1 h-3 w-3" />}
        {text}
      </a>
    </Link>
  ) : (
    <button className={classes} onClick={onClick}>
      {iconLeft && <IconLeft className="mr-1 h-3 w-3" />}
      {text}
    </button>
  );
};

export default Button;
