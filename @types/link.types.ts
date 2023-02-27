import { ReactChildren, ReactElement } from 'react';
import { IconType } from 'react-icons';
import { Url } from 'url';
import HeadingModel from './heading.types';
import TextModel from './text.types';
type LinkModel = {
  href: string;
  target?: string;
  children: ReactElement;
  isActive?: boolean;
  iconLeft?: IconType;
  iconRight?: IconType;
  onClickFn?: (...args: any) => void;
  extraClasses?: string;
  variant: 'navbar' | 'text';
};
export default LinkModel;
