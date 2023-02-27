import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import CardModel from '../../@types/card.types';
import Text from '../Text/Text';

const Card = ({ variant, imageSrc, title, description }: CardModel) => {
  let rootClasses = classNames(
    'relative w-72 mobile:w-full h-80 flex justify-center',
  );
  let imageClasses = classNames(
    'w-full object-cover rounded-lg hover:scale-[110%] transition-all',
  );
  let infoClasses = classNames(
    'rounded-lg bg-white px-14 py-5 absolute bottom-5 mx-5 text-center',
  );
  return (
    <div className={rootClasses}>
      <Image className={imageClasses} alt="" src={imageSrc} fill={true} />
      <div className={infoClasses}>
        <Text
          variant="medium"
          title={title}
          extraClasses=" text-text-primary font-semibold"
        />
        <Text variant="small" title={description} extraClasses="" />
      </div>
    </div>
  );
};

export default Card;
