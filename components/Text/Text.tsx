import React from 'react';
import classNames from 'classnames';
import TextModel from '../../@types/text.types';

function Text({ title, variant, extraClasses }: TextModel) {
  let classes = classNames(
    'font-normal text-deepViolet',
    {
      'text-4xs leading-4xs': variant == 'small',
      'text-3xs leading-3xs': variant == 'medium',
      'text-2xs leading-2xs': variant == 'large',
      'text-xs leading-xs': variant == 'x-large',
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
