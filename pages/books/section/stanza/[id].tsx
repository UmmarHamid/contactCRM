import Notification from '@/components/Notification/Notification';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { supabase } from '@/lib/subabaseClient';
import Image from 'next/image';
import Heading from '@/components/Heading/Heading';
import Text from '@/components/Text/Text';
import { useState } from 'react';
import Link from 'next/link';

const SectionPage = ({ currentStanza }: any) => {
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
    <div className="m-4 py-4 mobile:pb-24 min-h-[96vh] flex items-center justify-center">
      <div className="relative flex w-full max-w-[36rem] flex-col rounded-xl p-6  justify-center items-center mobile:items-start bg-white bg-clip-border text-gray-700 shadow-lg mt-2">
        {/* <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
            alt="ui/ux review check"
          />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          <button
            className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <FaHeart color="red" />
            </span>
          </button>
        </div> */}
        <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 mb-8 mobile:text-lg">
          {currentStanza.text}
        </h5>
        <span className="flex gap-2 w-full">
          <h5 className="block font-sans text-[16px] underline antialiased font-light leading-snug tracking-normal text-blue-gray-900 mb-4">
            English Translation
          </h5>
          :
        </span>

        <p className="block font-sans text-[20px] self-center mobile:text-[16px] antialiased font-light leading-relaxed text-gray-700">
          {currentStanza.english_translation}
        </p>
        <hr className="w-full h-[0.5px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <span className="flex gap-2 w-full ">
          <h5 className="block font-sans text-[16px] underline antialiased font-light leading-snug tracking-normal text-blue-gray-900 mb-4">
            Urdu Translation
          </h5>
          :
        </span>
        <p className="block font-sans text-[20px] self-center mobile:text-[16px] antialiased font-light leading-relaxed text-gray-700">
          {currentStanza.urdu_translation}
        </p>
        <div className="inline-flex flex-wrap items-center self-center gap-6 m-3 mt-6 group">
          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <FaCopy color="black" />
          </span>
          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <FaShare color="black" />
          </span>
          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <FaHeart color="red" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionPage;

export async function getServerSideProps(context: any) {
  const { id: stanzaId, sectionid, bookid } = context.query;
  const { data: book } = await supabase
    .from('book_list')
    .select('*')
    .eq('id', bookid)
    .single();
  const currentSection = book?.sections?.data.filter(
    (section: any) => section.id == sectionid,
  )[0];
  const currentStanza = currentSection.stanzas.filter(
    (stanza: any) => stanza.id == stanzaId,
  )[0];
  return {
    props: {
      currentStanza,
    },
  };
}

import { FaCopy, FaShare, FaHeart, FaStar } from 'react-icons/fa';
