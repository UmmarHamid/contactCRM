import React from 'react';
import classNames from 'classnames';
import LinkModel from '../../@types/link.types';
import { IconType } from 'react-icons';
import NextLink from 'next/link';

const Link = ({
  href,
  target,
  children,
  iconLeft,
  iconRight,
  onClickFn,
  extraClasses = '',
  variant = 'text',
}: LinkModel) => {
  let classes = classNames('inline-flex p-2 items-start', {}, extraClasses);
  let iconLeftClasses = classNames('shrink-0 w-6 h-6 mr-2');
  let iconRightClasses = classNames({});
  let childrenClasses = classNames({
    '': variant == 'navbar',
  });
  const IconLeft = iconLeft as IconType;
  const IconRight = iconRight as IconType;

  return (
    <NextLink
      href={href}
      target={target}
      className={classes}
      onClick={() => (onClickFn != null ? onClickFn() : null)}
    >
      {iconLeft ? <IconLeft className={iconLeftClasses} /> : null}
      <div className={childrenClasses}>{children}</div>

      {iconRight ? <IconRight className={iconRightClasses} /> : null}
    </NextLink>
  );
};
export default Link;
