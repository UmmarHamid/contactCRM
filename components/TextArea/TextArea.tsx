import classNames from 'classnames';
import React from 'react';
import { InputModel } from '../../@types/input.types';

const TextArea = ({ variant, placeholder, extraclasses, name }: InputModel) => {
  let inputClasses = classNames(
    'textarea rounded-md px-5 py-4 text-base font-primary border border-solid border-grey-primary placeholder:text-grey-dark',
    {
      default: variant == 'default',
      extraclasses,
    },
  );
  return (
    <textarea
      className={inputClasses}
      name={name}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
