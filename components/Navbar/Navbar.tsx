import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import NavbarModel from '../../@types/navbar.types';
import classNames from 'classnames';
import Menu from '../Menu/Menu';
import Heading from '../Heading/Heading';
import Link from '../Link/Link';

const Navbar = ({ handleCart, navItems }: NavbarModel) => {
  const [hovered, setHovered] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClose = () => {
    setNavbarOpen(false);
  };
  const handleHamburgerClick = () => {
    setNavbarOpen(true);
  };
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeHamburgerMenu = (e: any) => {
      if (!navRef.current?.contains(e.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', closeHamburgerMenu);
    setHovered(false);
    return () => document.removeEventListener('mousedown', closeHamburgerMenu);
  }, []);
  let overlayClasses = classNames(
    'fixed pointer-events-none top-0 w-full flex h-screen py-2 px-4 bg-grey-primary transition-opacity duration-300 ease-out',
    {
      'opacity-100': hovered,
      'opacity-0': !hovered,
      'mobile:opacity-100': navbarOpen,
      'mobile:opacity-0': !navbarOpen,
    },
  );
  let navbarClasses = classNames(
    'navbar justify-between group h-screen w-28 transition-multiple duration-300 ease-in flex flex-col py-6 px-9 bg-gradient-to-r from-white to-grey-primary top-0 fixed z-10',
    {
      'mobile:w-72 mobile:absolute mobile:-left-72 mobile:transition-left mobile:duration-300 mobile:ease-out':
        !navbarOpen,
      'mobile:w-72 mobile:left-0 mobile:transition-left': navbarOpen,
      'hover:w-72 navbar-open hover:transition-left ease-in': hovered,
      'navbar-closed': !hovered,
    },
  );

  return (
    <>
      <div
        ref={navRef}
        className={navbarClasses}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseOut={() => {
          setHovered(false);
        }}
      >
        <div className="menu-section">
          <div className="logo mb-12 h-8 mobile:hidden ">
            <a href="/dashboard">
              <Image
                src={'/favicon.ico'}
                alt="Header Logo"
                width={hovered ? 52 : 32}
                height={32}
                className="cursor-pointer ml-2 transition-multiple duration-300"
              />
            </a>
          </div>
          <div
            className="close-btn mx-[9px] mb-6 hidden h-4 w-[10px] cursor-pointer mobile:inline-flex"
            onClick={handleClose}
          >
            <ImCross className="text-shade-80" />
          </div>
          <div className="border-b border-solid border-shade-20 pb-12">
            <Menu variant="navbar">
              <>
                {navItems.slice(0, 2).map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    iconLeft={item.icon}
                    variant="navbar"
                  >
                    <Heading
                      title={item.title}
                      variant="x-small"
                      extraClasses="hover:text-blue-primary h-10 opacity-0 group-hover:opacity-100 duration-150 ease-in"
                    />
                  </Link>
                ))}
              </>
            </Menu>
          </div>
          <div className="pt-12">
            <Menu variant="navbar">
              <>
                {navItems.slice(2).map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    iconLeft={item.icon}
                    variant="navbar"
                  >
                    <Heading
                      title={item.title}
                      variant="x-small"
                      extraClasses="hover:text-blue-primary h-10 opacity-0 group-hover:opacity-100 duration-150 ease-in"
                    />
                  </Link>
                ))}
              </>
            </Menu>
          </div>
        </div>
      </div>
      <div className={overlayClasses} />
    </>
  );
};
export default Navbar;
