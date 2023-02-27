import React from 'react';
import classNames from 'classnames';
import LinkModel from '../../@types/link.types';
import { IconType } from 'react-icons';
import NextLink from 'next/link';
import Heading from '../Heading/Heading';

const Link = ({
  href,
  target,
  children,
  iconLeft,
  iconRight,
  onClickFn,
  extraClasses = '',
  isActive,
}: LinkModel) => {
  let classes = classNames({}, extraClasses);
  let textClasses = classNames({});
  let iconLeftClasses = classNames({});
  let iconRightClasses = classNames({});
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
      {children}
      {iconRight ? <IconRight className={iconRightClasses} /> : null}
    </NextLink>
  );
};
export default Link;
