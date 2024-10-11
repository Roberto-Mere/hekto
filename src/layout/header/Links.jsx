import { NavLink } from 'react-router-dom';
import List from '../../components/List';
import Typography from '../../components/Typography';

export default function Links() {
  return (
    <List
      list={['Home', 'Products', 'Blog', 'Contact']}
      keyFn={(item) => item}
      classes={'ml-[8rem] mr-auto gap-32 items-center'}
    >
      {(item) => (
        <NavLink>
          <Typography type="label">{item}</Typography>
        </NavLink>
      )}
    </List>
  );
}
