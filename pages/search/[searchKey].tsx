import Card from '@/components/Card/Card';
import { supabase } from '../../lib/subabaseClient';
import Image from 'next/image';
import { FaBook, FaUserGraduate } from 'react-icons/fa';
import Link from 'next/link';
import Heading from '@/components/Heading/Heading';

const SearchPage = ({ searchResults }: any) => {
  return (
    <>
      <div className="text-center pt-5 font-bold">
        <Heading variant="x-small" title="Search Results" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        {searchResults.map((result: any) => {
          return result.type == 'book' ? (
            <Link href={`/books/${result.id}`}>
              <div className="grid grid-cols-[20%_60%_20%] gap-1 p-2 rounded-xl place-items-center h-14 shadow-md border-2">
                <img className="w-10 h-6" src="/book.avif" alt="Book Image" />
                <p className="text-[12px] font-bold">{result.title}</p>
                <FaBook color="#312829" />
              </div>
            </Link>
          ) : (
            <Link href={`/poets/${result.id}`}>
              <div className="grid grid-cols-[20%_60%_20%] gap-1 p-2 rounded-xl place-items-center h-14 shadow-md border-2">
                <img className="w-10 h-6" src="/poet1.svg" alt="Book Image" />
                <p className="text-[12px] font-bold">{result.name}</p>
                <FaUserGraduate color="#312829" />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default SearchPage;

export async function getServerSideProps({ params }: any) {
  const { searchKey } = params;
  const { data: poets } = await supabase.from('poets').select();
  const { data: books } = await supabase.from('book_list').select();
  const formattedBooks: Array<any> =
    books?.map((book: any) => {
      return {
        ...book,
        type: 'book',
      };
    }) ?? [];

  const formattedPoets: Array<any> =
    poets?.map((poet: any) => {
      return {
        ...poet,
        type: 'poet',
      };
    }) ?? [];
  const searchResults = [...formattedBooks, ...formattedPoets].filter(
    (result: any) => {
      if (result.type == 'book') {
        return result.title.includes(searchKey);
      } else {
        return result.name.includes(searchKey);
      }
    },
  );
  return {
    props: {
      searchResults,
    },
  };
}
