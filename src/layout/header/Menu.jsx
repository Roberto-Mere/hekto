import List from '../../components/list/List';
import Typography from '../../components/typography/Typography';

import ArrowDownIcon from '../../assets/svg/arrow-down.svg';
import UserIcon from '../../assets/svg/user.svg';
import HeartIcon from '../../assets/svg/heart-full.svg';
import CartIcon from '../../assets/svg/cart.svg';
import IconItem from '../../components/IconItem';
import IconButton from '../../components/IconButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Menu() {
  const cartItemsCount = useSelector((state) =>
    state.cart.items.reduce((acc, curr) => acc + curr.quantity, 0),
  );

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
      <Link to="/cart" className="flex items-center gap-12">
        <CartIcon className="text-white" />
        {cartItemsCount > 0 ? (
          <p className="relative flex items-center justify-center rounded-full bg-white p-4">
            <Typography type="label-small" classes="w-16 h-16">
              {cartItemsCount}
            </Typography>
          </p>
        ) : null}
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
