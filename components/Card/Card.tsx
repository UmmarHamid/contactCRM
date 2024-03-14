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
    'relative w-72 mobile:w-full h-80 flex justify-center mx-2':
      variant == 'poet',
    'relative mobile:w-full h-92 rounded-2xl border-2 border-black-800  hover:scale-[103%] transition-all bg-white p-4 flex flex-col gap-2 justify-center my-4 mx-2':
      variant == 'book',
    'relative w-fit mobile:w-full h-92 rounded-2xl border-2 border-black-800 hover:scale-[103%] transition-all bg-white p-4 flex  gap-4 items-center my-4 mx-2':
      variant == 'verticalCard',
    'shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)]': variant == 'book',
  });
  let imageClasses = classNames({
    'w-full object-cover rounded-lg hover:scale-[110%] transition-all':
      variant == 'poet',
    'min-w-[200px] h-[250px] object-cover rounded-2xl  ': variant == 'book',
    'w-[160px] h-[160px] object-cover rounded-2xl ': variant == 'verticalCard',
  });
  let infoClasses = classNames({
    'rounded-lg bg-white px-14 py-5 absolute bottom-5 mx-5 text-center':
      variant == 'poet',
    'rounded-lg bg-white flex flex-col gap-2 max-w-[250px]': variant == 'book',
    'rounded-lg bg-white flex flex-col gap-4 justify-between ':
      variant == 'verticalCard',
  });
  let dateClasses = classNames(' text-black-500');
  let titleClasses = classNames({
    'text-text-primary font-semibold': variant == 'poet',
    'text-sm font-semibold ': variant == 'verticalCard',
    'text-sm font-extrabold line-clamp-1 ': variant == 'book',
  });
  let descriptionClasses = classNames({
    'text-text-primary font-semibold': variant == 'poet',
    'text-text-primary font-semibold text-gray-500 tracking-wide line-clamp-1 ':
      variant == 'book',
    'text-[18px] font-semibold text-gray-500 tracking-wide line-clamp-2 ':
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
        fill={variant == 'poet' ? true : undefined}
        width={variant == 'poet' ? undefined : 320}
        height={
          variant == 'book' || variant == 'verticalCard' ? 320 : undefined
        }
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
        <Text variant="medium" title={title} extraClasses={titleClasses} />
        <Text
          variant="small"
          title={description}
          extraClasses={descriptionClasses}
        />
        {authorName && authorImage ? (
          <ul className={listClasses}>
            <li>
              <img src={authorImage} alt="Author Image" />
            </li>
            <li>{authorName}</li>
          </ul>
        ) : (
          <p className="text-[20px] font-bold text-gray-600">{authorName}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
