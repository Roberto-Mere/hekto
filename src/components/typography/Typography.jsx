export default function Typography({ children, type = 'body', classes = '' }) {
  let Tag = 'p';
  let baseClasses;

  // Headings
  if (type.startsWith('h')) {
    Tag = type;
  }

  if (type === 'h1') {
    baseClasses = 'text-h1 font-bold capitalize tracking-heading';
  } else if (type === 'h2') {
    baseClasses = 'text-h2 font-bold capitalize tracking-heading';
  } else if (type === 'h3') {
    baseClasses = 'text-h3 font-bold capitalize tracking-heading';
  } else if (type === 'h4') {
    baseClasses = 'text-h4 font-bold capitalize tracking-heading';

    // Subtitles
  } else if (type === 'sub1') {
    baseClasses = 'text-sub1 font-bold';
  } else if (type === 'sub2') {
    baseClasses = 'text-sub2 font-bold';
  } else if (type === 'sub3') {
    baseClasses = 'text-sub3 font-bold';
  } else if (type === 'sub4') {
    baseClasses = 'text-base font-semibold';

    // Labels
  } else if (type === 'label') {
    baseClasses = 'text-base font-normal';
  } else if (type === 'label-bold') {
    baseClasses = 'text-base font-bold';
  } else if (type === 'label-small') {
    baseClasses = 'text-sm font-normal';

    // Paragraphs
  } else if (type === 'body') {
    baseClasses = 'text-base font-lato font-normal';
  } else if (type === 'body-bold') {
    baseClasses = 'text-base font-lato font-bold';
  } else if (type === 'body-large') {
    baseClasses = 'text-xl font-lato font-normal';
  } else if (type === 'body-small') {
    baseClasses = 'text-sm font-lato font-normal';
  }

  return <Tag className={`${baseClasses} ${classes}`}>{children}</Tag>;
}
