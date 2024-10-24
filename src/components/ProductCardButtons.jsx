import IconButton from './IconButton';
import Cart from '../assets/svg/cart.svg';
import HeartEmpty from '../assets/svg/heart-empty.svg';
import HeartFull from '../assets/svg/heart-full.svg';

import Zoom from '../assets/svg/zoom.svg';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, favoritesActions } from '../store';

export default function ProductCardButtons({ item, classes }) {
  const favorite = useSelector((state) =>
    state.fav.favorites.includes(item.id),
  );
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(cartActions.addItem(item));
  }

  function handleToggleFavorite() {
    dispatch(favoritesActions.toggleFavorite(item.id));
  }

  return (
    <div className={`flex ${classes}`}>
      <IconButton
        classes="rounded-full p-8 text-tertiary hover:bg-gray-2 focus:bg-gray-2 transition-all duration-200 ease-in-out"
        onClick={handleAddToCart}
      >
        <Cart />
      </IconButton>
      <IconButton
        onClick={handleToggleFavorite}
        classes="rounded-full p-8 text-tertiary hover:bg-gray-2 focus:bg-gray-2 transition-all duration-200 ease-in-out"
      >
        {favorite ? <HeartFull /> : <HeartEmpty />}
      </IconButton>
      <IconButton classes="rounded-full p-8 text-tertiary hover:bg-gray-2 focus:bg-gray-2 transition-all duration-200 ease-in-out">
        <Zoom />
      </IconButton>
    </div>
  );
}
