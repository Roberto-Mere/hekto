import { Link } from 'react-router-dom';
import List from './list/List';
import Typography from './typography/Typography';

export default function LinksColumn({ title, list }) {
  return (
    <nav>
      <Typography type="sub2" classes="mb-24">
        {title}
      </Typography>
      <List
        list={list}
        keyFn={(item) => item.name}
        classes="flex-col items-start gap-24"
      >
        {(item) => (
          <Link to={item.to}>
            {
              <Typography type="body" classes="text-gray-3">
                {item.name}
              </Typography>
            }
          </Link>
        )}
      </List>
    </nav>
  );
}
