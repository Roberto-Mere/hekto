import Offer1 from '../assets/svg/offer-1.svg';
import H3 from '../typography/heading/H3';

export default function OfferBig({ discount, style = '' }) {
  return (
    <div className={`grid w-max items-center justify-items-center ${style}`}>
      <Offer1 className="grid-overlap text-info" />
      <H3 style="grid-overlap text-white">
        {discount}% <span className="block">off</span>
      </H3>
    </div>
  );
}
