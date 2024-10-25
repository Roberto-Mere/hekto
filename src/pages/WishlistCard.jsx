import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../http';
import Preloader from '../components/Preloader';
import Typography from '../components/typography/Typography';
import Stars from '../components/Stars';
import ProductCardButtons from '../components/ProductCardButtons';

export default function WishlistCard({ favId }) {
  const { data, status } = useQuery({
    queryKey: [favId],
    queryFn: () => fetchProduct(favId),
  });

  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nam soluta! Dolores aspernatur omnis vero animi modi ut beatae.';

  return (
    <>
      {status === 'pending' ? (
        <Preloader height="h-[44vh]" />
      ) : (
        <article className="flex h-full flex-col rounded-lg p-8 shadow-normal transition-all duration-300 ease-out hover:shadow-large">
          <Link to={`/products/${data.id}`} className="h-[18vh]">
            <img
              src={data.image}
              alt={data.name}
              className="h-full max-h-[18vh] w-full object-cover"
            />
          </Link>
          <div className="flex grow flex-col justify-between p-8">
            <div className="mt-24 flex flex-col gap-8">
              <Link to={`/products/${data.id}`}>
                <Typography type="sub3">{data.name}</Typography>
              </Link>
              <Stars stars={data.rating} />
              <div className="flex items-center gap-16">
                <Typography type="label">
                  $
                  {data.offer
                    ? (data.price - (data.price * data.offer) / 100).toFixed(2)
                    : data.price.toFixed(2)}
                </Typography>
                {data.offer ? (
                  <Typography
                    type="label-small"
                    classes="line-through text-gray-3"
                  >
                    ${data.price.toFixed(2)}
                  </Typography>
                ) : null}
              </div>
              <Typography classes="text-gray-3 my-16">{description}</Typography>
            </div>
            <ProductCardButtons item={data} classes="gap-24" />
          </div>
        </article>
      )}
    </>
  );
}
