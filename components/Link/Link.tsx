import React from 'react';
import classNames from 'classnames';
import LinkModel from '../../@types/link.types';
import { IconType } from 'react-icons';
import Link from 'next/link';

const OzoneLink = ({
  text,
  href = '',
  target,
  variant = 'navbarMenu',
  iconLeft,
  iconRight,
  onClickFn,
  extraClasses = '',
  isActive,
}: LinkModel) => {
  let classes = classNames(
    {
      'flex items-center justify-center box-border w-fit px-2 h-10 rounded-md hover:cursor-pointer':
        variant == 'navbarMenu' || variant == 'text',
      'bg-gradient-to-t from-shade-80 to-deepViolet':
        variant == 'navbarMenu' && isActive,
      'p-2 border border-solid border-shade-20 bg-gradient-to-r from-white to-milkyMist rounded-md':
        variant == 'asset-action',
      'inline-flex': variant == 'normal',
    },
    extraClasses,
  );
  let textClasses = classNames({
    'font-normal leading-sm': variant == 'navbarMenu' || variant == 'text',
    'text-[0px] mobile:text-xs group-hover:text-xs hover:transition-multiple duration-300 ease-in':
      variant == 'navbarMenu',
    'text-sm hover:text-deepViolet': variant == 'text',
    'text-violetUltra text-xs leading-xs font-medium py-[2px] border-b-2 border-solid border-violetUltra':
      variant == 'normal',
    'text-deepviolet': variant == 'asset-action',
    'text-shade-80': variant == 'navbarMenu' && !isActive,
    'text-white': variant == 'navbarMenu' && isActive,
  });
  let iconLeftClasses = classNames({
    'text-shade-80 mr-2': variant == 'navbarMenu' || variant == 'text',
    'text-deepViolet': variant == 'asset-action',
  });
  let iconRightClasses = classNames({
    'text-shade-80 ml2': variant == 'navbarMenu' || variant == 'text',
    'text-deepViolet': variant == 'asset-action',
  });
  const IconLeft = iconLeft as IconType;
  const IconRight = iconRight as IconType;

  return (
    <Link href={href}>
      <a
        data-testid="ozone-link"
        target={target}
        className={classes}
        onClick={() => (onClickFn != null ? onClickFn() : null)}
      >
        {iconLeft ? <IconLeft className={iconLeftClasses} /> : null}
        {text && <p className={textClasses}>{text}</p>}
        {iconRight ? <IconRight className={iconRightClasses} /> : null}
      </a>
    </Link>
  );
};
export default OzoneLink;
