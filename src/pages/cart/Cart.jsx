import { useSelector } from 'react-redux';
import CartEmpty from './CartEmpty';
import CartTotal from './CartTotal';
import CartList from './CartList';

export default function Cart() {
  const cartLength = useSelector((state) => state.cart.items.length);

  return (
    <>
      {cartLength === 0 ? (
        <CartEmpty />
      ) : (
        <main className="flex justify-between gap-128 px-[41.5rem] py-128">
          <CartList />
          <CartTotal />
        </main>
      )}
    </>
  );
}
