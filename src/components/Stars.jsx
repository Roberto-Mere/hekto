import Star from '../assets/svg/star.svg';
import List from './list/List';

export default function Stars({ stars }) {
  return (
    <List
      list={Array(5).fill(true).fill(false, stars)}
      keyFn={(_, index) => index}
      classes="gap-8"
    >
      {(item) => <Star className={item ? 'text-secondary' : 'text-gray-2'} />}
    </List>
  );
}
