import { NavLink } from 'react-router-dom';
import List from '../../components/List';

export default function Links() {
  return (
    <List list={['Home', 'Products', 'Blog', 'Contact']} keyFn={(item) => item}>
      {(item) => <NavLink>{item}</NavLink>}
    </List>
  );
}
