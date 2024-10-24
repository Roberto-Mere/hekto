import { Link } from 'react-router-dom';
import Typography from './typography/Typography';
import Button from './button/Button';
import ProductCardButtons from './ProductCardButtons';

export default function ProductCard({
  id,
  image,
  name,
  code = 'Code - Y523201',
  price,
}) {
  return (
    <article className="grid-product group grid basis-full rounded-xl shadow-normal transition-all duration-300 ease-out focus-within:-translate-y-24 focus-within:shadow-large hover:-translate-y-24 hover:shadow-large">
      <ProductCardButtons classes="grid-overlap z-10 gap-8 self-start p-8 opacity-0 transition-all duration-100 group-odd/hidden:invisible group-even/hidden:invisible group-focus-within:opacity-100 group-hover:opacity-100" />
      <img
        src={image}
        alt={name}
        className="grid-overlap h-full max-h-[22vh] w-full object-cover"
      />
      <Link
        to={`/products/${id}`}
        className="grid-overlap z-10 mb-4 self-end justify-self-center rounded-xl opacity-0 transition-all duration-100 group-odd/hidden:invisible group-focus-within:opacity-100 group-hover:opacity-100"
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
