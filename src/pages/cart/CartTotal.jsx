import { useSelector } from 'react-redux';
import Typography from '../../components/typography/Typography';
import Button from '../../components/button/Button';

export default function CartTotal() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <aside className="flex max-w-[30rem] flex-col bg-gray-1 px-16 py-8">
      <div className="flex justify-between border-b border-b-gray-2 px-8 py-16">
        <Typography type="body-bold">Subtotal:</Typography>
        <Typography type="label-bold">
          $
          {cartItems
            .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
            .toFixed(2)}
        </Typography>
      </div>
      <div className="flex justify-between border-b border-b-gray-2 px-8 py-16">
        <Typography type="body-bold">Total:</Typography>
        <Typography type="label-bold">
          $
          {(
            cartItems.reduce(
              (acc, curr) => acc + curr.price * curr.quantity,
              0,
            ) + 100
          ).toFixed(2)}
        </Typography>
      </div>
      <div className="mb-24 flex justify-between px-8 py-16">
        <Typography type="body-small" classes="text-gray-3">
          Shipping:
        </Typography>
        <Typography type="label-small" classes="text-gray-3">
          ${(100).toFixed(2)}
        </Typography>
      </div>
      <Button>
        <Typography type="sub4">Proceed to checkout</Typography>
      </Button>
    </aside>
  );
}
