import { Link } from 'react-router-dom';
import Typography from './typography/Typography';
import IconButton from './IconButton';
import Cart from '../assets/svg/cart.svg';
import Heart from '../assets/svg/heart.svg';
import Zoom from '../assets/svg/zoom.svg';
import Button from './button/Button';

export default function ProductCard({
  id,
  image,
  name,
  code = 'Code - Y523201',
  price,
}) {
  return (
    <article className="grid-product group grid basis-full rounded-xl shadow-normal transition-all duration-300 ease-out focus-within:-translate-y-24 focus-within:shadow-large hover:-translate-y-24 hover:shadow-large">
      <div className="grid-overlap z-10 p-8 opacity-0 transition-all duration-100 group-focus-within:opacity-100 group-hover:opacity-100">
        <IconButton
          color="text-tertiary"
          backgroundColor="hover:bg-gray-2 focus:bg-gray-2"
        >
          <Cart />
        </IconButton>
        <IconButton
          color="text-tertiary"
          backgroundColor="hover:bg-gray-2 focus:bg-gray-2"
        >
          <Heart />
        </IconButton>
        <IconButton
          color="text-tertiary"
          backgroundColor="hover:bg-gray-2 focus:bg-gray-2"
        >
          <Zoom />
        </IconButton>
      </div>
      <img
        src={image}
        alt={name}
        className="grid-overlap h-full max-h-[23rem] w-full object-cover"
      />
      <Link
        to={`/products/${id}`}
        className="grid-overlap z-10 mb-4 self-end justify-self-center rounded-xl opacity-0 transition-all duration-100 group-focus-within:opacity-100 group-hover:opacity-100"
      >
        <Button size="small" backgroundColor="bg-success" tabIndex={-1}>
          <Typography type="label-small">View Details</Typography>
        </Button>
      </Link>
      <div className="flex flex-col items-center p-24">
        <Typography type="label-bold" classes="text-primary mb-24 w-max">
          {name}
        </Typography>
        <Typography type="label-small" classes="text-gray-3 mb-8">
          {code}
        </Typography>
        <Typography type="label-bold">${price.toFixed(2)}</Typography>
      </div>
    </article>
  );
}
