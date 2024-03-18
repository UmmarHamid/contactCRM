import Notification from '@/components/Notification/Notification';
import { supabase } from '../../lib/subabaseClient';

const BookDetailPage = ({ book }: any) => {
  if (!book) {
    return <p>Books not fetching</p>;
  }
  return (
    <div>
      <h1>{book.title}</h1>
      <h1>{book.id}</h1>
      <p>{book.description}</p>
      <Notification
        text={'Component Not Implemented Yet'}
        variant="danger-small"
      />
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
