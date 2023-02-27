import { IconType } from 'react-icons';

export type ButtonType = {
  variant:
    | 'primary-square'
    | 'primary-rounded'
    | 'primary-fullRounded'
    | 'primary-outline'
    | 'secondary-square'
    | 'secondary-rounded'
    | 'secondary-fullRounded'
    | 'secondary-outline'
    | 'tertiary-square'
    | 'tertiary-rounded'
    | 'tertiary-fullRounded'
    | 'tertiary-outline';
  text: string;
  extraClasses?: string;
  iconLeft?: IconType;
  onClick?: (...args: any) => void;
  asLink?: boolean;
  href?: string;
};
