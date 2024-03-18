'use client';
import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';
import Link from 'next/link';
import Head from 'next/head';
import { supabase } from '../../lib/subabaseClient';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Text from '@/components/Text/Text';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

const Dashboard = ({ poets, books }: any) => {
  const featuredBooks = books.filter((book: any) => book.is_featured);
  const featuredPoets = poets.filter((poet: any) => poet.is_featured);
  const [search, setSearch] = useState('');
  const [filteredBooks, setfilteredBooks] = useState(books);
  const router = useRouter();
  const handleSearch = () => {
    const searchedBooks = books.filter((book: any) =>
      book.title.toLowerCase().includes(search.toLowerCase()),
    );
    setfilteredBooks(searchedBooks);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="root mobile:py-4">
        <Heading
          variant="medium"
          title="Poet's Page"
          extraClasses="font-bold text-center mb-10"
        />
        <div className="flex justify-center pb-8 w-[100%]">
          <input
            type="text"
            className="bg-slate-50 pl-3 ml-[10px] outline-none text-black rounded-l-lg border-0 font-bold py-2 w-[100%]"
            placeholder="Search Here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                router.push(`/search/${search}`);
              }
            }}
          />
          <button
            className="bg-slate-50 rounded-r-lg py-2 px-4 border-l-2 border-gray-400"
            onClick={() => router.push(`/search/${search}`)}
          >
            <FaSearch />
          </button>
        </div>
        <div className="mx-auto flex flex-col">
          <div className="flex justify-between">
            <Text title="Featured Books" variant="x-large" />
            <Link href={'/books'}>
              <p className="text-xs text-sky-600">View All</p>
            </Link>
          </div>
          <div className="flex pb-4 mb-4  gap-4 overflow-scroll">
            {featuredBooks.map((book: any) => (
              <Link key={book.id} href={`/books/${book.id}`}>
                <Card
                  variant="book"
                  title={book.title}
                  description={book.description}
                  imageSrc="/book.avif"
                  category={book.category}
                  date={book.publish_date}
                  authorName={book.author_name}
                  authorImage="/author.webp"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-20 mx-auto flex flex-col gap-3">
          <div className="flex justify-between">
            <Text title="Featured Poets" variant="x-large" />
            <Link href={'/poets'}>
              <p className="text-xs text-sky-600">View All</p>
            </Link>
          </div>
          <div className="flex gap-4 overflow-scroll">
            {featuredPoets.map((poet: any) => (
              <>
                <Link
                  key={poet.id}
                  href={`/poets/${poet.id}`}
                  className="flex justify-center items-center border-2 border-black-800 bg-white shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-2xl p-1 hover:scale-[110%] mb-8"
                >
                  <Card
                    variant="poet"
                    title={poet.name}
                    imageSrc="/poet2.svg"
                  />
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  const { data: poets } = await supabase.from('poets').select();
  const { data: books } = await supabase.from('book_list').select();
  return {
    props: {
      poets: poets,
      books: books,
    },
  };
}
