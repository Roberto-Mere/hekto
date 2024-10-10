import Ellipse from '../assets/svg/ellipse.svg';
import OfferBig from './OfferBig';

export default function PromotionImage({ src, alt }) {
  return (
    <a href="" className="group relative grid h-auto w-full">
      <Ellipse className="grid-overlap text-gray-3" />
      <Ellipse className="grid-overlap text-gray-2 transition-all duration-500 ease-out group-hover:-translate-y-24 group-hover:translate-x-48" />
      <img
        src={src}
        alt={alt}
        className="grid-overlap w-[60rem] translate-x-48 transition-all duration-500 group-hover:scale-105"
      />
      <OfferBig discount={50} style="absolute right-12 top-48" />
    </a>
  );
}
