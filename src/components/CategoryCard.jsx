import { Link } from 'react-router-dom';
import Button from './button/Button';
import Typography from './typography/Typography';
import Ellipse from '../assets/svg/ellipse.svg';

export default function CategoryCard({ id, name, image }) {
  return (
    <article>
      <div className="group grid">
        <Ellipse className="grid-overlap h-full w-full text-gray-3" />
        <div className="grid-overlap h-full w-full rounded-full transition-all duration-500 ease-out group-hover:-translate-y-8 group-hover:translate-x-8">
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <Link
          to={`/products?category=${id}`}
          className="grid-overlap invisible z-10 mb-24 self-end justify-self-center rounded-xl opacity-0 transition-all duration-100 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100"
        >
          <Button size="small" backgroundColor="bg-success" tabIndex={-1}>
            <Typography type="label-small">View Details</Typography>
          </Button>
        </Link>
      </div>
      <Typography type="sub3" classes="mt-32 text-center capitalize">
        {name}
      </Typography>
    </article>
  );
}