import Notification from '@/components/Notification/Notification';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { supabase } from '@/lib/subabaseClient';
import Image from 'next/image';
import Heading from '@/components/Heading/Heading';
import Text from '@/components/Text/Text';
import { useState } from 'react';
import Link from 'next/link';
import { FaBookDead } from 'react-icons/fa';

const SectionPage = ({ currentSection, bookid }: any) => {
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
  return (
    <div className="m-4 py-4 mobile:pb-24 flex min-h-[96vh] justify-center flex-col items-center">
      <div className="relative flex flex-col  bg-clip-border rounded-xl text-white shadow-gray-900/20 shadow-md w-full max-w-[35rem] p-8">
        <div className="relative pb-8 m-0  overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
          <Heading
            variant="large"
            title={`Section ${currentSection.id}`}
            extraClasses="block font-sans text-sm antialiased font-bold leading-relaxed tracking-wider uppercase"
          />
          <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal ">
            <span className="block font-sans text-[20px] antialiased font-light text-gray-700 leading-relaxed text-inherit">
              {currentSection.description}
            </span>
          </h1>
        </div>
        <div className="p-0">
          <ul className="flex flex-col gap-4">
            {currentSection.stanzas.map((stanza: any) => (
              <div key={stanza.id} className="mb-2 tracking-wide">
                <Link
                  href={`/books/section/stanza/${stanza.id}?sectionid=${currentSection.id}&bookid=${bookid}`}
                >
                  <li className="flex items-center gap-4 justify-center">
                    <button
                      className="align-middle w-[90%] select-none tracking-wider font-sans font-bold text-center bg-gray-800 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[16px] py-3.5 px-7 rounded-lg text-white shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                      type="button"
                    >
                      {stanza.text}
                    </button>
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionPage;

export async function getServerSideProps(context: any) {
  const { id: sectionId, bookid } = context.query;

  const { data: book } = await supabase
    .from('book_list')
    .select('*')
    .eq('id', bookid)
    .single();
  const currentSection = book?.sections?.data.filter(
    (section: any) => section.id == sectionId,
  )[0];

  return {
    props: {
      currentSection,
      bookid: bookid,
    },
  };
}
