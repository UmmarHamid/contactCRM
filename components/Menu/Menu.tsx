import React from 'react';
import classNames from 'classnames';
import MenuModel from '../../@types/menu.types';
import Link from '../Link/Link';

const Menu = ({ variant, extraClasses = '', links }: MenuModel) => {
  let classes = classNames(
    {
      'inline-flex flex-col': variant == 'navbar',
    },
    extraClasses,
  );
  return (
    <>
      <ul data-testid="ozone-menu" className={classes}>
        {links?.map((link, index) => {
          return (
            <Link
              key={index}
              text={link.text}
              href={link.href}
              variant="navbarMenu"
              iconLeft={link.iconLeft}
              isActive={link.isActive}
              onClickFn={link.onClickFn}
            />
          );
        })}
      </ul>
    </>
  );
};
export default Menu;
