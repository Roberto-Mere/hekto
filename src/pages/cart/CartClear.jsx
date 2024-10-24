import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import Typography from '../../components/typography/Typography';

export default function CartClear() {
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(cartActions.clearCart());
  }

  return (
    <button onClick={handleClearCart} className="">
      <Typography classes="text-primary">Clear Cart</Typography>
    </button>
  );
}
