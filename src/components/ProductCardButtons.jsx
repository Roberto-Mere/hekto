import IconButton from './IconButton';
import Cart from '../assets/svg/cart.svg';
import HeartEmpty from '../assets/svg/heart-empty.svg';
import HeartFull from '../assets/svg/heart-full.svg';
import Zoom from '../assets/svg/zoom.svg';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, favoritesActions } from '../store';
import { useState } from 'react';
import Modal from './Modal';

export default function ProductCardButtons({ item, classes }) {
  const [zoomIsOpen, setZoomIsOpen] = useState(false);
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

  function handleZoomImage() {
    setZoomIsOpen(true);
  }

  function handleUnzoomImage() {
    setZoomIsOpen(false);
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
      <IconButton
        classes="rounded-full p-8 text-tertiary hover:bg-gray-2 focus:bg-gray-2 transition-all duration-200 ease-in-out"
        onClick={handleZoomImage}
      >
        <Zoom />
      </IconButton>
      {zoomIsOpen ? (
        <Modal isOpen={zoomIsOpen} onClose={handleUnzoomImage}>
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </Modal>
      ) : null}
    </div>
  );
}
