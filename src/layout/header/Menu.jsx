import List from '../../components/List';
import Sub4 from '../../typography/subtitle/Sub4';

import ArrowDownIcon from '../../assets/svg/arrow-down.svg';
import UserIcon from '../../assets/svg/user.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import CartIcon from '../../assets/svg/cart.svg';
import IconItem from '../../components/IconItem';

export default function Menu() {
  const menuList = [
    // Temp language and currency IconItems while we get select menus
    { icon: <ArrowDownIcon />, text: <Sub4>English</Sub4> },
    { icon: <ArrowDownIcon />, text: <Sub4>USD</Sub4> },
    { icon: <UserIcon />, text: <Sub4>Login</Sub4> },
    { icon: <HeartIcon />, text: <Sub4>Wishlist</Sub4> },
    <CartIcon className="text-white" />,
  ];

  return (
    <List list={menuList} keyFn={(_, index) => index} style="gap-32">
      {(item) =>
        item.text ? (
          <IconItem
            icon={item.icon}
            text={item.text}
            style="gap-4 text-white"
            forward={false}
          />
        ) : (
          item
        )
      }
    </List>
  );
}
