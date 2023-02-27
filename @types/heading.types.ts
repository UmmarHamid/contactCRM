type HeadingModel = {
  title: string;
  variant:
    | 'x-small-light'
    | 'x-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | '2x-large'
    | '3x-large';
  extraClasses?: string;
};

export default HeadingModel;
