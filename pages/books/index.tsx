import React, { useEffect, useState } from 'react';
import Card from '@/components/Card/Card';
import { supabase } from '@/lib/subabaseClient';

const BookGrid = ({ books }: any) => {
  return (
    <section className="grid grid-cols-3 mobile:grid-cols-1 gap-y-10 gap-x-6">
      {books.map((book: any) => (
        <Card
          key={book.id}
          variant="verticalCard"
          title={book.title}
          description={book.description}
          imageSrc="/book.avif"
          authorName={`By ${book.author_name}`}
        />
      ))}
    </section>
  );
};

export default BookGrid;
export async function getServerSideProps() {
  const { data: books } = await supabase.from('book_list').select();
  return {
    props: {
      books: books,
    },
  };
}
