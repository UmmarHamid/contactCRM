import React from 'react';
import classNames from 'classnames';
import HeadingModel from '../../@types/heading.types';

function Heading({ title, variant, extraClasses }: HeadingModel) {
  let size = 1;
  switch (variant) {
    case 'x-small-light':
      size = 6;
      break;
    case 'x-small':
      size = 6;
      break;
    case 'small':
      size = 6;
      break;
    case 'medium':
      size = 5;
      break;
    case 'large':
      size = 4;
      break;
    case 'x-large':
      size = 3;
      break;
    case '2x-large':
      size = 2;
      break;
    case '3x-large':
      size = 1;
      break;
    default:
      size = 1;
  }

  let classes = classNames(
    {
      'font-normal text-xs leading-xs text-shade-60':
        variant == 'x-small-light',
      'font-medium text-xs leading-xs text-deepViolet': variant == 'x-small',
      'font-medium text-sm leading-sm text-deepViolet': variant == 'small',
      'font-medium text-md leading-md text-deepViolet mobile:text-sm mobile:leading-sm':
        variant == 'medium',
      'font-medium text-lg leading-lg text-deepViolet': variant == 'large',
      'font-medium text-xl leading-xl text-deepViolet mobile:text-lg mobile:leading-lg':
        variant == 'x-large',
      'font-medium text-2xl leading-2xl text-deepViolet': variant == '2x-large',
      'font-semibold text-3xl leading-3xl text-deepViolet':
        variant == '3x-large',
    },
    extraClasses,
  );
  const Tag = `h${size}` as keyof JSX.IntrinsicElements;
  return (
    <Tag data-testid="heading" className={classes + ' ' + extraClasses}>
      {title}
    </Tag>
  );
}
export default Heading;
