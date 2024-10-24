import { Link } from 'react-router-dom';
import Ellipse from '../assets/svg/ellipse.svg';
import OfferBig from './OfferBig';

export default function PromotionImage({ src, alt }) {
  return (
    <Link to="#" className="group relative grid h-auto w-max">
      <Ellipse className="grid-overlap w-[34vw] text-gray-3" />
      <Ellipse className="grid-overlap w-[34vw] text-gray-2 transition-all duration-500 ease-out group-hover:-translate-y-24 group-hover:translate-x-48" />
      <img
        src={src}
        alt={alt}
        className="grid-overlap w-[31vw] translate-x-48 transition-all duration-500 group-hover:scale-105"
      />
      <OfferBig discount={50} classes="absolute right-12 top-48" />
    </Link>
  );
}
