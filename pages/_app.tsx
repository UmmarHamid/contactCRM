import MobileNav from '@/components/MobileNav/MobileNav';
import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import classNames from 'classnames';
import type { AppProps } from 'next/app';
import {
  FaBook,
  FaBookOpen,
  FaCopy,
  FaHome,
  FaInfo,
  FaItunesNote,
  FaPhone,
  FaUser,
  FaUserSecret,
  FaWrench,
} from 'react-icons/fa';

export default function App({ Component, pageProps }: AppProps) {
  let rootClasses = classNames(
    'ml-36 root-wrapper max-h-screen mobile:ml-0 mobile:px-4',
  );
  const navItems = [
    {
      id: '0',
      title: 'Home',
      href: '/',
      icon: FaHome,
    },
    {
      id: '1',
      title: 'Poets',
      href: '/poets',
      icon: FaUserSecret,
    },
    {
      id: '2',
      title: 'Books',
      href: '/books',
      icon: FaBook,
    },
    {
      id: '3',
      title: 'Profile',
      href: '/profile',
      icon: FaUser,
    },
    {
      id: '4',
      title: 'Settings',
      href: '/profile',
      icon: FaWrench,
    },
    {
      id: '5',
      title: 'About',
      href: '/about',
      icon: FaInfo,
    },
    {
      id: '6',
      title: 'Contact',
      href: '/contact',
      icon: FaPhone,
    },
  ];
  return (
    <div className={rootClasses}>
      <div className="navbarr fixed top-0 left-0 z-10 mobile:w-full ">
        <Navbar navItems={navItems} />
        <MobileNav navItems={navItems} />
      </div>

      <Component {...pageProps} />
    </div>
  );
}
