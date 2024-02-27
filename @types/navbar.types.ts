import { IconType } from 'react-icons';

type NavbarModel = {
  cartCount?: number;
  handleCart?: () => void;
  navItems: Array<{
    id: string;
    title: string;
    href: string;
    icon: IconType;
  }>;
};
export default NavbarModel;
