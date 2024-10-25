import { Link } from 'react-router-dom';
import Typography from './typography/Typography';
import ProductCardButtons from './ProductCardButtons';

export default function ProductCardWide({ id, image, name, price }) {
  return (
    <article className="grid-product group grid h-full basis-full">
      <Link to={`/products/${id}`} className="grid-overlap">
        <img
          src={image}
          alt={name}
          className="mb-12 h-[25vh] w-full object-cover"
        />
      </Link>
      <ProductCardButtons
        item={{ id, image, name, price }}
        classes=" flex-col self-end mb-16 justify-self-start grid-overlap z-10 gap-8 self-start p-8 opacity-0 transition-all duration-100 group-odd/hidden:invisible group-even/hidden:invisible group-focus-within:opacity-100 group-hover:opacity-100"
      />
      <div className="flex justify-between">
        <Typography type="label" classes="text-primary mb-8 w-max">
          {name}
        </Typography>
        <Typography type="label">${price.toFixed(2)}</Typography>
      </div>
    </article>
  );
}
