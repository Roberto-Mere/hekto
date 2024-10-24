import { Link } from 'react-router-dom';
import sadCart from '../../assets/image/sad-cart.jpeg';
import Button from '../../components/button/Button';
import Typography from '../../components/typography/Typography';

export default function CartEmpty() {
  return (
    <main className="flex flex-col items-center gap-32 px-sides py-96">
      <img src={sadCart} alt="Empty sad cart" className="w-2/5" />
      <Typography type="h3">Your cart is empty</Typography>
      <Button>
        <Link to="/products">
          <Typography type="sub4">Start Shopping</Typography>
        </Link>
      </Button>
    </main>
  );
}
