import { Link } from 'react-router-dom';
import List from './List';
import Sub2 from '../typography/subtitle/Sub2';
import Body from '../typography/body/Body';

export default function LinksColumn({ title, list }) {
  return (
    <nav>
      <Sub2 style="mb-24">{title}</Sub2>
      <List
        list={list}
        keyFn={(item) => item.name}
        style="flex-col items-start gap-24"
      >
        {(item) => (
          <Link to={item.to}>
            {<Body style="text-gray-3">{item.name}</Body>}
          </Link>
        )}
      </List>
    </nav>
  );
}
