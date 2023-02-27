import classNames from 'classnames';
import React from 'react';
import { InputTypes } from '../../@types/input.types';

const Input = ({ variant, placeholder, extraclasses, name }: InputTypes) => {
  let inputClasses = classNames(
    'input inline-flex rounded-md px-5 py-4 text-base font-primary border border-solid border-grey-primary placeholder:text-grey-dark',
    {
      default: variant == 'default',
      extraclasses,
    },
  );
  return (
    <input
      className={inputClasses}
      name={name}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
