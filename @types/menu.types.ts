import LinkModel from './link.types';

type MenuModel = {
  variant: 'navbar';
  links: LinkModel[];
  extraClasses?: string;
};
export default MenuModel;
