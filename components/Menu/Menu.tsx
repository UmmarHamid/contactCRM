import React from 'react';
import classNames from 'classnames';
import MenuModel from '../../@types/menu.types';
import Link from '../Link/Link';
import Text from '../Text/Text';

const Menu = ({ variant, extraClasses = '', children }: MenuModel) => {
  let classes = classNames(
    {
      'inline-flex flex-col space-y-4': variant == 'navbar',
    },
    extraClasses,
  );
  return (
    <>
      <ul className={classes}>{children}</ul>
    </>
  );
};
export default Menu;
