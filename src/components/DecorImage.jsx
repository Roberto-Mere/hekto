import { Link } from 'react-router-dom';
import Ellipse from '../assets/svg/ellipse.svg';

export default function DecorImage({ src, alt, id }) {
  return (
    <Link to={`/${id}`} className="relative grid w-1/3">
      <Ellipse className="grid-overlap h-full w-full text-gray-2" />
      <Ellipse className="grid-overlap absolute -right-48 -top-32 h-3/4 w-3/4 text-gray-2" />
      <img
        src={src}
        alt={alt}
        className="grid-overlap h-full max-h-[43.7rem] w-full translate-x-48 self-center object-contain"
      />
    </Link>
  );
}
