import List from '../../components/List';
import ArrowDownIcon from '../../assets/svg/arrow-down.svg';
import UserIcon from '../../assets/svg/user.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import CartIcon from '../../assets/svg/cart.svg';
import IconItem from '../../components/IconItem';

export default function Menu() {
  return (
    <List
      list={[
        // Temp language and currency IconItems while we get select menus
        { icon: <ArrowDownIcon />, text: 'English' },
        { icon: <ArrowDownIcon />, text: 'mhhasanul@gmail.com' },
        { icon: <UserIcon />, text: 'Login' },
        { icon: <HeartIcon />, text: 'Wishlist' },
        { icon: <CartIcon /> },
      ]}
      keyFn={(_, index) => index}
    >
      {(item) =>
        item.text ? <IconItem icon={item.icon} text={item.text} /> : item.icon
      }
    </List>
  );
}
