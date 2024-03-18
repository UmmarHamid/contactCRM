import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import CardModel from '../../@types/card.types';
import Text from '../Text/Text';

const Card = ({
  variant,
  imageSrc,
  title,
  description,
  category,
  date,
  authorName,
  authorImage,
}: CardModel) => {
  let rootClasses = classNames({
    'relative w-72 w-full flex justify-center items-center mx-2 flex-col mobile:w-full flex justify-center items-center mx-2 flex-col relative ':
      variant == 'poet',
    'relative mobile:w-full h-92 rounded-2xl border-2 border-black-800  hover:scale-[103%] transition-all bg-white p-4 flex flex-col gap-2 justify-center my-4 mx-2':
      variant == 'book',
    'relative w-fit mobile:w-full h-50 rounded-2xl border-2 border-black-800 hover:scale-[103%] transition-all bg-white p-2 flex  gap-4 items-center my-3 mx-2':
      variant == 'verticalCard',
    'shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)]': variant == 'book',
  });
  let imageClasses = classNames({
    'w-[200px] h-[200px] object-cover  rounded-full  transition-all mobile:w-[80px] mobile:h-[80px]  ':
      variant == 'poet',
    'min-w-[200px] h-[250px] object-cover rounded-2xl  ': variant == 'book',
    'w-[90px] h-[140px] object-cover rounded-2xl ': variant == 'verticalCard',
  });
  let infoClasses = classNames({
    'rounded-lg  break-all text-black-200 text-center ': variant == 'poet',
    'rounded-lg bg-white flex flex-col gap-2': variant == 'book',
    'rounded-lg bg-white flex flex-col gap-1 justify-between ':
      variant == 'verticalCard',
  });
  let dateClasses = classNames(' text-black-500');
  let titleClasses = classNames({
    'mt-4 max-w-72': variant == 'poet',
    'text-[15px] font-semibold ': variant == 'verticalCard',
    'text-sm font-extrabold line-clamp-1 ': variant == 'book',
  });
  let descriptionClasses = classNames({
    'text-text-primary  font-semibold': variant == 'poet',
    'text-text-primary font-semibold text-gray-500 tracking-wide line-clamp-1 ':
      variant == 'book',
    'text-[14px] font-semibold text-gray-500 tracking-wide line-clamp-2 ':
      variant == 'verticalCard',
  });
  let categoryClasses = classNames({
    'text-text-primary font-semibold': variant == 'poet',
    'text-text-primary font-extrabold rounded-lg bg-yellow-primary p-2 w-fit my-4  ':
      variant == 'book',
  });
  let listClasses = classNames({
    'flex flex-row gap-4 items-center mt-2 font-bold': variant == 'book',
  });
  return (
    <div className={rootClasses}>
      <Image
        className={imageClasses}
        alt="Card Image"
        src={imageSrc}
        width={variant == 'poet' ? 320 : 320}
        height={variant == 'book' || variant == 'verticalCard' ? 320 : 320}
      />
      <div className={infoClasses}>
        {category && (
          <Text
            variant="medium"
            title={category}
            extraClasses={categoryClasses}
          />
        )}
        {date && (
          <Text variant="small" title={date} extraClasses={dateClasses} />
        )}
        <Text variant="small" title={title} extraClasses={titleClasses} />
        {description && (
          <Text
            variant="small"
            title={description}
            extraClasses={descriptionClasses}
          />
        )}
        {authorName && authorImage ? (
          <ul className={listClasses}>
            <li>
              <img src={authorImage} alt="Author Image" />
            </li>
            <li>{authorName}</li>
          </ul>
        ) : (
          <p className="text-[15px] font-bold text-gray-600">{authorName}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
