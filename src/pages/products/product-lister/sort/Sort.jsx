import List from '../../../../components/list/List';
import SortOption from './SortOption';
import SortView from './SortView';

export default function Sort() {
  const sortOptions = [
    {
      name: 'Per Page',
      input: '',
    },
    {
      name: 'Sort By',
      input: '',
    },
    {
      name: 'View',
      input: <SortView />,
    },
  ];

  return (
    <List
      list={sortOptions}
      keyFn={(item) => item.name}
      classes="col-span-2 justify-self-end gap-64"
    >
      {(item) => <SortOption {...item} />}
    </List>
  );
}
