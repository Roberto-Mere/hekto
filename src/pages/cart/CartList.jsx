import { useSelector } from 'react-redux';
import List from '../../components/list/List';
import CartItem from './CartItem';

export default function CartList() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <List
      list={cartItems}
      keyFn={(item) => item.id}
      classes="flex flex-col gap-24 flex-1"
    >
      {(item) => <CartItem {...item} />}
    </List>
  );
}
