import Button from '@/components/Button/Button';
import { supabase } from '../../lib/subabaseClient';
import { useState } from 'react';
import Card from '@/components/Card/Card';
import Link from 'next/link';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoLanguageSharp } from 'react-icons/io5';
const PoetDetailPage = ({ poet, poetBooks }: any) => {
  console.log(poetBooks);
  console.log(poet);
  const description =
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here';
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!poet) {
    return <p>No Poet Found</p>;
  }

  return (
    <>
      <div className="justify-center items-center  border-gray-600 border-2  rounded-2xl  bg-white shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-4 w[100%] mt-4 ">
        <div className="flex justify-between ">
          <div>
            <h1 className="font-bold text-[25px]">{poet.name}</h1>
            <div className="flex justify-start  gap-2 items-center ">
              <p>
                <IoLanguageSharp />
              </p>
              <p className="font-semibold">{poet.language}</p>
            </div>

            <div className="flex justify-start  gap-2 items-center ">
              <p>
                <FaMapMarkedAlt />
              </p>
              <p className="font-semibold">{poet.address}</p>
            </div>
            <div className="flex justify-start  gap-2 items-center ">
              <p className="text-blue-600">
                <MdOutlineAlternateEmail />
              </p>
              <p className="font-semibold  ">{poet.email}</p>
            </div>
          </div>
          <div className="   rounded-full">
            {' '}
            <Card variant="poet" imageSrc="/poet2.svg" />
          </div>
        </div>
        {showFullDescription ? (
          <p className="font-bold text-gray-600 text-pretty">{description}</p>
        ) : (
          <p className="font-bold text-gray-600 text-pretty">
            {' '}
            {description.slice(0, 100) + '...'}
          </p>
        )}
        {showFullDescription ? (
          <button
            className="text-blue-primary font-semibold"
            onClick={() => {
              setShowFullDescription(false);
            }}
          >
            Less
          </button>
        ) : (
          <button
            className="text-blue-primary font-semibold"
            onClick={() => {
              setShowFullDescription(true);
            }}
          >
            More
          </button>
        )}
      </div>
      <div className="mb-32">
        {poetBooks.length > 0 ? (
          poetBooks.map((book: any) => (
            <Link key={book.id} href={`/books/${book.id}`}>
              <Card
                key={book.id}
                variant="verticalCard"
                title={book.title}
                description={book.description}
                imageSrc="/book.avif"
                authorName={`By ${poet.name}`}
                category={book.category}
                date={book.publish_date}
              />
            </Link>
          ))
        ) : (
          <p>No Books Found</p>
        )}
      </div>
    </>
  );
};

export default PoetDetailPage;
export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const { data: poet } = await supabase
    .from('poets')
    .select('*')
    .eq('id', id)
    .single();
  const { data: poetBooks } = await supabase
    .from('book_list')
    .select('*')
    .eq('author_id', id);

  return {
    props: {
      poet: poet,
      poetBooks: poetBooks,
    },
  };
}
