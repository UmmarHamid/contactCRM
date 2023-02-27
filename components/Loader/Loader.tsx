import classNames from 'classnames';
import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const Loader = ({ extraClasses }: { extraClasses?: string }) => {
  const wrapperClasses = classNames('flex items-center', extraClasses);
  const loaderClasses = classNames('animate-spin text-violetUltra');
  const textClasses = classNames(
    'font-normal text-2xl leading-xl text-deepViolet ml-2 ',
  );
  const dotClasses = classNames(
    'h-[5px] w-[5px] animate-fade bg-deepViolet opacity-0',
  );

  return (
    <div className={wrapperClasses}>
      <BiLoaderAlt size={48} className={loaderClasses} />
      <p className={textClasses}>Loading</p>
      <div className="relative top-3 ml-2 flex  space-x-1">
        <span className={dotClasses}></span>
        <span style={{ animationDelay: '.7s' }} className={dotClasses}></span>
        <span style={{ animationDelay: '1.4s' }} className={dotClasses}></span>
      </div>
    </div>
  );
};

export default Loader;
