import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { AiFillHome } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  FaBell,
  FaBox,
  FaBoxes,
  FaClipboardCheck,
  FaSignOutAlt,
  FaSlidersH,
  FaStore,
  FaTruck,
  FaUserFriends,
} from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import NavbarModel from '../../@types/navbar.types';
import classNames from 'classnames';
import Link from 'next/link';
import router from 'next/router';
import Menu from '../Menu/Menu';

const Navbar = ({ cartCount, handleCart }: NavbarModel) => {
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
    'fixed pointer-events-none top-0 w-full flex h-screen py-2 px-4 bg-shade-60 transition-opacity duration-500 ease-in',
    {
      'opacity-100': hovered,
      'opacity-0': !hovered,
      'mobile:opacity-100': navbarOpen,
      'mobile:opacity-0': !navbarOpen,
    },
  );
  let navbarClasses = classNames(
    'navbar justify-between group h-screen w-28 transition-multiple duration-300 ease-in flex flex-col py-6 px-9 bg-gradient-to-r from-white to-milkyMist top-0 fixed z-10',
    {
      'mobile:w-72 mobile:absolute mobile:-left-72 mobile:transition-left mobile:duration-300 mobile:ease-out':
        !navbarOpen,
      'mobile:w-72 mobile:left-0 mobile:transition-left': navbarOpen,
      'hover:w-72 navbar-open': hovered,
      'navbar-closed': !hovered,
    },
  );
  let mobileNavClasses = classNames(
    'hidden mobile:flex items-center px-4 py-3 bg-gradient-to-b from-white to-milkyMist',
  );

  return (
    <>
      <div className={mobileNavClasses}>
        <GiHamburgerMenu
          className="cursor-pointer"
          onClick={handleHamburgerClick}
        />
        <div className="mobile-logo mx-auto h-6">
          <Link href="/">
            <a>
              <Image
                src={'/logo-mobile.svg'}
                alt="Header Logo"
                width={86}
                height={24}
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <div className="flex">
          <FaSignOutAlt
            className="h-6 w-6 cursor-pointer p-1"
            onClick={() => {}}
          />
        </div>
        {/* <div className="cart-icon relative cursor-pointer" onClick={handleCart}>
          <IoMdCart />
          {cartCount && (
            <span className="absolute -top-2 -left-1.5 inline-flex h-4 items-center justify-center rounded-3xl bg-gradient-to-l from-violetUltra to-ozoneBlue p-1 text-[10px] font-normal leading-[10px] text-white">
              {cartCount}
            </span>
          )}
        </div> */}
      </div>
      <div
        data-testid="navbar"
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
          <div className="logo mb-12 h-8 mobile:hidden">
            <Link href="/dashboard">
              <a>
                <Image
                  src={hovered ? '/header-logo.svg' : '/header-logo-small.svg'}
                  alt="Header Logo"
                  width={hovered ? 115 : 32}
                  height={32}
                  className="cursor-pointer"
                />
              </a>
            </Link>
          </div>
          <div
            className="close-btn mx-[9px] mb-6 hidden h-4 w-[10px] cursor-pointer mobile:inline-flex"
            onClick={handleClose}
          >
            <ImCross className="text-shade-80" />
          </div>
          <div className="border-b border-solid border-shade-20 pb-12">
            <Menu
              variant="navbar"
              links={[
                {
                  href: '/dashboard',
                  text: 'Dashboard',
                  iconLeft: AiFillHome,
                  onClickFn: () => {
                    handleClose();
                  },
                },
                {
                  href: '/store',
                  text: 'Store',
                  iconLeft: FaStore,
                  onClickFn: () => {
                    handleClose();
                  },
                },
                {
                  href: '/members',
                  text: 'Members',
                  iconLeft: FaUserFriends,
                  onClickFn: () => {
                    handleClose();
                  },
                },
                {
                  href: '/inventory',
                  text: 'Inventory',
                  iconLeft: FaBoxes,
                  onClickFn: () => {
                    handleClose();
                  },
                },
              ]}
            />
          </div>
          <div className="pt-12">
            <Menu
              variant="navbar"
              links={[
                {
                  href: '/security-alerts',
                  text: 'Security Alerts',
                  iconLeft: FaBell,
                  onClickFn: () => {
                    handleClose();
                  },
                },
                {
                  href: '/orders',
                  text: 'Orders',
                  iconLeft: FaBox,
                  onClickFn: () => {
                    handleClose();
                  },
                },
                { href: '/logistics', text: 'Logistics', iconLeft: FaTruck },
                {
                  href: '/subscription',
                  text: 'Subscription',
                  iconLeft: FaClipboardCheck,
                },
                {
                  href: '/settings',
                  text: 'Settings',
                  iconLeft: FaSlidersH,
                  onClickFn: () => {
                    handleClose();
                  },
                },
              ]}
            />
          </div>
        </div>
        {/* <div
          data-testid="user-info"
          className="info-section flex h-16 items-center justify-between border-t border-solid border-shade-20 pt-6"
        >
          {isSuccess ? (
            <UserInfo
              designation={loggedInUser.userextra.company_role}
              userName={loggedInUser.first_name}
              userInitial={
                loggedInUser.first_name
                  ? loggedInUser.first_name.charAt(0)
                  : '?'
              }
            />
          ) : (
            <h1>Loading...</h1>
          )}
        </div> */}
      </div>
      <div className={overlayClasses} />
    </>
  );
};
export default Navbar;
