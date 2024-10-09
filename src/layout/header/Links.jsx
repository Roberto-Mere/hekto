import { NavLink } from 'react-router-dom';
import List from '../../components/List';
import Label from '../../typography/label/Label';

export default function Links() {
  return (
    <List
      list={['Home', 'Products', 'Blog', 'Contact']}
      keyFn={(item) => item}
      style={'ml-[8rem] mr-auto gap-32'}
    >
      {(item) => (
        <NavLink>
          <Label>{item}</Label>
        </NavLink>
      )}
    </List>
  );
}
