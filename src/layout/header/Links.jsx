import { NavLink } from 'react-router-dom';
import List from '../../components/list/List';
import Typography from '../../components/typography/Typography';

export default function Links() {
  return (
    <List
      list={['Home', 'Products', 'Blog', 'Contact']}
      keyFn={(item) => item}
      classes={'ml-[8rem] mr-auto gap-32 items-center'}
    >
      {(item) => (
        <NavLink
          to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          className={({ isActive }) => (isActive ? 'text-primary' : '')}
        >
          <Typography type="label">{item}</Typography>
        </NavLink>
      )}
    </List>
  );
}
