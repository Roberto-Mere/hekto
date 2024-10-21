import { Link } from 'react-router-dom';
import Typography from './typography/Typography';

export default function ProductCardWide({ id, image, name, price }) {
  return (
    <article className="flex h-full basis-full">
      <Link to={`/products/${id}`} className="grid-product grid basis-full">
        <img
          src={image}
          alt={name}
          className="grid-overlap mb-12 h-[25vh] w-full object-cover"
        />
        <div className="flex justify-between">
          <Typography type="label" classes="text-primary mb-8 w-max">
            {name}
          </Typography>
          <Typography type="label">${price.toFixed(2)}</Typography>
        </div>
      </Link>
    </article>
  );
}
