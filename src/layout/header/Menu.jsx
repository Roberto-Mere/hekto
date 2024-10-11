import List from '../../components/List';
import Typography from '../../components/Typography';

import ArrowDownIcon from '../../assets/svg/arrow-down.svg';
import UserIcon from '../../assets/svg/user.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import CartIcon from '../../assets/svg/cart.svg';
import IconItem from '../../components/IconItem';

export default function Menu() {
  const menuList = [
    // Temp language and currency IconItems while we get select menus
    {
      icon: <ArrowDownIcon />,
      text: <Typography type="sub4">English</Typography>,
    },
    { icon: <ArrowDownIcon />, text: <Typography type="sub4">USD</Typography> },
    { icon: <UserIcon />, text: <Typography type="sub4">Login</Typography> },
    {
      icon: <HeartIcon />,
      text: <Typography type="sub4">Wishlist</Typography>,
    },
    <CartIcon className="text-white" />,
  ];

  return (
    <List list={menuList} keyFn={(_, index) => index} classes="gap-32">
      {(item) =>
        item.text ? (
          <IconItem
            icon={item.icon}
            text={item.text}
            classes="gap-4 text-white"
            forward={false}
          />
        ) : (
          item
        )
      }
    </List>
  );
}
