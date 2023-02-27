import LinkModel from './link.types';

type MenuModel = {
  variant: 'navbar';
  links: Omit<LinkModel, 'children'>[];
  extraClasses?: string;
};
export default MenuModel;
