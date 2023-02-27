import React from 'react';
import classNames from 'classnames';
import MenuModel from '../../@types/menu.types';
import Link from '../Link/Link';
import Text from '../Text/Text';

const Menu = ({ variant, extraClasses = '', links }: MenuModel) => {
  let classes = classNames(
    {
      'inline-flex flex-col': variant == 'navbar',
    },
    extraClasses,
  );
  return (
    <>
      <ul className={classes}>
        {links?.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              iconLeft={link.iconLeft}
              isActive={link.isActive}
              onClickFn={link.onClickFn}
            >
              <Text variant="small" title="test title" />
            </Link>
          );
        })}
      </ul>
    </>
  );
};
export default Menu;
