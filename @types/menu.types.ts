import { ReactElement } from 'react';
import LinkModel from './link.types';

type MenuModel = {
  variant: 'navbar';
  extraClasses?: string;
  children: ReactElement;
};
export default MenuModel;
