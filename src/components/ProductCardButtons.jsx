import IconButton from './IconButton';
import Cart from '../assets/svg/cart.svg';
import Heart from '../assets/svg/heart.svg';
import Zoom from '../assets/svg/zoom.svg';

export default function ProductCardButtons({ classes }) {
  return (
    <div className={`flex ${classes}`}>
      <IconButton classes="rounded-full p-8 text-tertiary hover:bg-gray-2 focus:bg-gray-2 transition-all duration-200 ease-in-out">
        <Cart />
      </IconButton>
      <IconButton classes="rounded-full p-8 text-tertiary hover:bg-gray-2 focus:bg-gray-2 transition-all duration-200 ease-in-out">
        <Heart />
      </IconButton>
      <IconButton classes="rounded-full p-8 text-tertiary hover:bg-gray-2 focus:bg-gray-2 transition-all duration-200 ease-in-out">
        <Zoom />
      </IconButton>
    </div>
  );
}
