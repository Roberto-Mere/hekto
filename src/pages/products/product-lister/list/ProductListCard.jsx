import Typography from '../../../../components/typography/Typography';
import Star from '../../../../assets/svg/star.svg';
import List from '../../../../components/list/List';
import ProductCardButtons from '../../../../components/ProductCardButtons';
import { Link } from 'react-router-dom';
import Stars from '../../../../components/Stars';

export default function ProductListCard({
  id,
  image,
  name,
  price,
  offer,
  rating,
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nam soluta! Dolores aspernatur omnis vero animi modi ut beatae.',
}) {
  return (
    <article className="flex h-full flex-col rounded-lg p-8 shadow-normal">
      <Link to={`/products/${id}`} className="h-[18vh]">
        <img
          src={image}
          alt={name}
          className="h-full max-h-[18vh] w-full object-cover"
        />
      </Link>
      <div className="flex grow flex-col justify-between p-8">
        <div className="mt-24 flex flex-col gap-8">
          <Link to={`/products/${id}`}>
            <Typography type="sub3">{name}</Typography>
          </Link>
          <Stars stars={rating} />
          <div className="flex items-center gap-16">
            <Typography type="label">
              $
              {offer
                ? (price - (price * offer) / 100).toFixed(2)
                : price.toFixed(2)}
            </Typography>
            {offer ? (
              <Typography type="label-small" classes="line-through text-gray-3">
                ${price.toFixed(2)}
              </Typography>
            ) : null}
          </div>
          <Typography classes="text-gray-3 my-16">{description}</Typography>
        </div>
        <ProductCardButtons classes="gap-24" />
      </div>
    </article>
  );
}
