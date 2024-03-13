import { supabase } from '../../lib/subabaseClient';

const BookDetailPage = ({ book }: any) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const { data: book } = await supabase
    .from('book_list')
    .select('*')
    .eq('id', id)
    .single();

  if (!book) {
    return <p>Books not fetching</p>;
  }

  return {
    props: {
      book: book,
    },
  };
}

export default BookDetailPage;
