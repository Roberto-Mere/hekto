import List from '../../components/list/List';
import Typography from '../../components/typography/Typography';

import ArrowDownIcon from '../../assets/svg/arrow-down.svg';
import UserIcon from '../../assets/svg/user.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import CartIcon from '../../assets/svg/cart.svg';
import IconItem from '../../components/IconItem';
import IconButton from '../../components/IconButton';
import { Link } from 'react-router-dom';

export default function Menu() {
  const menuList = [
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
    <IconButton classes="block">
      <Link to="/cart">
        <CartIcon className="text-white" />
      </Link>
    </IconButton>,
  ];

  return (
    <List
      list={menuList}
      keyFn={(_, index) => index}
      classes="gap-32 items-center"
    >
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
