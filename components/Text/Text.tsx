import React from 'react';
import classNames from 'classnames';
import TextModel from '../../@types/text.types';

function Text({ title, variant, extraClasses }: TextModel) {
  let classes = classNames(
    'font-normal text-deepViolet',
    {
      'text-xxs leading-xxs': variant == 'x-small',
      'text-xs leading-xs': variant == 'small',
      'text-sm leading-sm': variant == 'medium',
      'text-md leading-md': variant == 'large',
      'text-lg leading-lg': variant == 'x-large',
    },
    extraClasses,
  );
  return (
    <p data-testid="text" className={classes}>
      {title}
    </p>
  );
}
export default Text;
