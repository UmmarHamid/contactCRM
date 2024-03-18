type CardModel = {
  variant: 'poet' | 'book' | 'verticalCard';
  imageSrc: string;
  title?: string;
  category?: string;
  date?: string;
  authorName?: string;
  authorImage?: string;
  description?: string;
};

export default CardModel;
