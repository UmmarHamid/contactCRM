import React from 'react';
import classNames from 'classnames';
import HeadingModel from '../../@types/heading.types';

function Heading({ title, variant, extraClasses }: HeadingModel) {
  let size = 1;
  switch (variant) {
    case 'x-small':
      size = 5;
      break;
    case 'small':
      size = 4;
      break;
    case 'medium':
      size = 3;
      break;
    case 'large':
      size = 2;
      break;
    case 'x-large':
      size = 1;
      break;
    default:
      size = 1;
  }

  let classes = classNames(
    'text-text-primary',
    {
      'text-xs leading-xs': variant == 'x-small',
      'text-sm leading-sm': variant == 'small',
      'text-md leading-md mobile:text-sm mobile:leading-sm':
        variant == 'medium',
      'text-lg leading-lg': variant == 'large',
      'text-xl leading-xl mobile:text-lg mobile:leading-lg':
        variant == 'x-large',
    },
    extraClasses,
  );
  const Tag = `h${size}` as keyof JSX.IntrinsicElements;
  return <Tag className={classes + ' ' + extraClasses}>{title}</Tag>;
}
export default Heading;
