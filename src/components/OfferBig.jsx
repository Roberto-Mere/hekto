import Offer1 from '../assets/svg/offer-1.svg';
import Typography from './Typography';

export default function OfferBig({ discount, classes = '' }) {
  return (
    <div className={`grid w-max items-center justify-items-center ${classes}`}>
      <Offer1 className="grid-overlap text-info" />
      <Typography type="h3" classes="grid-overlap text-white">
        {discount}% <span className="block">off</span>
      </Typography>
    </div>
  );
}
