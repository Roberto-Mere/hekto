import { useDispatch, useSelector } from 'react-redux';
import Typography from '../../components/typography/Typography';
import { cartActions } from '../../store';

export default function CartItemInput({ id }) {
  const quantity = useSelector(
    (state) => state.cart.items.find((item) => item.id === id).quantity,
  );
  const dispatch = useDispatch();

  function removeItem() {
    dispatch(cartActions.removeItem(id));
  }

  function addItem() {
    dispatch(cartActions.addItem({ id }));
  }

  return (
    <div className="flex w-max gap-16 rounded-xl border border-gray-2 p-4">
      <button onClick={removeItem} className="w-32">
        <Typography type="body-small">-</Typography>
      </button>
      <Typography type="body-small" classes="py-8">
        {quantity}
      </Typography>
      <button onClick={addItem} className="w-32">
        <Typography type="body-small">+</Typography>
      </button>
    </div>
  );
}
