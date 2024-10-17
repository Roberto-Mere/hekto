import { Link } from 'react-router-dom';
import Typography from './typography/Typography';

export default function ProductCard({ id, image, name, price }) {
  return (
    <article className="flex basis-full rounded-xl shadow-normal transition-all duration-300 ease-out focus-within:-translate-y-24 focus-within:shadow-large hover:-translate-y-24 hover:shadow-large">
      <Link to={`/products/${id}`} className="grid-product grid basis-full">
        <img
          src={image}
          alt={name}
          className="grid-overlap h-full max-h-[23rem] w-full object-cover p-16 pb-0"
        />
        <div className="flex flex-col items-center p-24">
          <Typography type="label-bold" classes="text-primary mb-8 w-max">
            {name}
          </Typography>
          <Typography type="label">${price.toFixed(2)}</Typography>
        </div>
      </Link>
    </article>
  );
}
