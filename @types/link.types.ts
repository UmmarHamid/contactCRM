import { IconType } from 'react-icons';
import { Url } from 'url';
type LinkModel = {
  text?: string;
  href?: string;
  target?: string;
  variant?: 'navbarMenu' | 'text' | 'asset-action' | 'normal';
  size?: 'default' | 'small';
  isActive?: boolean;
  iconLeft?: IconType;
  iconRight?: IconType;
  onClickFn?: (...args: any) => void;
  extraClasses?: string;
};
export default LinkModel;
