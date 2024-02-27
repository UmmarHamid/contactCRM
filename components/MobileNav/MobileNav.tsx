import NavbarModel from '@/@types/navbar.types';
import React from 'react';

const MobileNav = ({ navItems }: NavbarModel) => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 hidden mobile:block">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        {navItems.slice(0, 5).map((item) => (
          <a
            key={item.id}
            href={item.href}
            data-tooltip-target={`tooltip-${item.title}`}
            type="button"
            className="inline-flex flex-col gap-1 items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            {<item.icon size={22} />}
            <span className="sr-only">{item.title}</span>
            <h6 className="text-5xs">{item.title}</h6>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
