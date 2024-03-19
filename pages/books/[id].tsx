import Notification from '@/components/Notification/Notification';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { supabase } from '../../lib/subabaseClient';
import Image from 'next/image';
import Heading from '@/components/Heading/Heading';
import Text from '@/components/Text/Text';
import { useState } from 'react';
import Link from 'next/link';

const BookDetailPage = ({ book }: any) => {
  if (!book) {
    return <p>This book is Missing!</p>;
  }
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = (value: boolean) => {
    setShowMore(value);
  };
  let imageClasses = twMerge(
    classNames('w-[50%] object-contain rounded-2xl mobile:w-[70%]'),
  );
  let infoClasses = classNames(
    'rounded-lg flex flex-col justify-center items-center gap-8',
  );
  let descriptionClasses = twMerge(
    classNames(
      'text-text-primary font-semibold text-gray-500 max-w-[90%] tracking-wider',
    ),
  );
  let titleClasses = twMerge(
    classNames(
      'block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900',
    ),
  );
  const bookSections = book.sections?.data;
  return (
    <div className="m-4 py-4 mobile:pb-24">
      <div className={infoClasses}>
        <Image
          className={imageClasses}
          alt="Card Image"
          src="/book.avif"
          width={420}
          height={420}
        />

        <Heading title={book.title} variant="large"></Heading>
        <p className={descriptionClasses}>
          {showMore || book.description.length <= 100
            ? book.description
            : book.description.slice(0, 100) + '...'}
          {book.description.length >= 100 && (
            <button
              onClick={() => toggleShowMore(!showMore)}
              className=" text-black underline ml-2"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          )}
        </p>
        <div className="flex flex-row flex-wrap gap-20 mobile:flex-col mobile:justify-normal mobile:gap-5">
          {bookSections.map((section: any, key: { id: any }) => (
            <Link
              href={`/books/section/${section.id}?bookid=${book.id}`}
              key={section.id}
            >
              <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="p-6">
                  <Heading
                    title={section?.title}
                    variant="large"
                    extraClasses={titleClasses}
                  />
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {section?.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/books/section/${section.id}?bookid=${book.id}`}
                    className="inline-block"
                  >
                    <button
                      className="flex items-center gap-2 px-2 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const { data: book } = await supabase
    .from('book_list')
    .select('*')
    .eq('id', id)
    .single();

  return {
    props: {
      book: book,
    },
  };
}
