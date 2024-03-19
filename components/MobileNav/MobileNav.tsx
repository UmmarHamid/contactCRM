import NavbarModel from '@/@types/navbar.types';
import React from 'react';

const MobileNav = ({ navItems }: NavbarModel) => {
  return (
    <div className="fixed z-50 w-full h-16 bottom-4 right-[45%] translate-x-1/2 hidden mobile:block">
      <div className="grid gap-4 h-full max-w-[90%]  bg-gray-200 border border-gray-200 rounded-full grid-cols-3 ">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            data-tooltip-target={`tooltip-${item.title}`}
            type="button"
            className="inline-flex flex-col gap-1 items-center justify-center rounded-full hover:bg-gray-50 dark:hover:bg-gray-400 group "
          >
            {<item.icon size={20} />}
            <span className="sr-only">{item.title}</span>
            <h6 className="text-5xs ">{item.title}</h6>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
