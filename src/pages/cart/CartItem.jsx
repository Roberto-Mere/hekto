import Typography from '../../components/typography/Typography';
import CartItemInput from './CartItemInput';

export default function CartItem({ id, image, name, price, quantity }) {
  return (
    <article className="flex w-full items-center">
      <img
        src={image}
        alt={name}
        className="mr-24 h-[10vh] w-[8vw] rounded-lg object-cover"
      />
      <div className="mr-auto">
        <Typography type="sub2">{name}</Typography>
        <Typography type="label">${price.toFixed(2)}</Typography>
      </div>
      <CartItemInput id={id} />
      <Typography type="label" classes="ml-64">
        ${(price * quantity).toFixed(2)}
      </Typography>
    </article>
  );
}
