import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ImageShowcase from './ImageShowcase';
import Typography from '../../../components/typography/Typography';
import { fetchProduct } from '../../../http';
import Loader from '../../../components/Loader';
import Stars from '../../../components/Stars';
import Button from '../../../components/button/Button';
import IconButton from '../../../components/IconButton';
import HeartEmpty from '../../../assets/svg/heart-empty.svg';
import HeartFull from '../../../assets/svg/heart-full.svg';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, favoritesActions } from '../../../store';

export default function Display() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.fav.favorites.includes(id));

  const { data, status } = useQuery({
    queryKey: [id],
    queryFn: () => fetchProduct(id),
  });

  function handleAddToCart() {
    dispatch(cartActions.addItem(data));
  }

  function handleToggleFavorite() {
    dispatch(favoritesActions.toggleFavorite(id));
  }

  return (
    <section className="flex gap-128 px-sides py-128">
      {status === 'pending' ? (
        <Loader />
      ) : (
        <>
          <ImageShowcase
            images={data.showcase ?? [data.image]}
            name={data.name}
          />
          <div>
            <div className="flex flex-col gap-24">
              <Typography type="h3" classes="-mb-16">
                {data.name}
              </Typography>
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
              <Typography classes="text-gray-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam soluta! Dolores aspernatur omnis vero animi modi ut beatae.
              </Typography>
            </div>
            <div className="mt-96 flex items-center gap-40">
              <Button onClick={handleAddToCart}>
                <Typography type="sub4">Add To Cart</Typography>
              </Button>
              <IconButton
                onClick={handleToggleFavorite}
                classes="rounded-full p-8 text-primary hover:bg-gray-2 focus:bg-gray-2 transition-all duration-200 ease-in-out"
              >
                {favorite ? <HeartFull /> : <HeartEmpty />}
              </IconButton>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
