import IconButton from '../../../../components/IconButton';
import ListView from '../../../../assets/svg/list-view.svg';
import GridView from '../../../../assets/svg/grid-view.svg';
import List from '../../../../components/list/List';
import SortOption from './SortOption';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../../../store';

export default function Sort({ view }) {
  const dispatch = useDispatch();
  const sortView = useSelector((state) => state.products.view);

  function handleViewChange(view) {
    dispatch(productsActions.changeView(view));
  }

  const sortOptions = [
    {
      name: 'View',
      input: (
        <div className="flex gap-16">
          <IconButton onClick={() => handleViewChange('list')}>
            <ListView
              className={
                sortView === 'list' ? 'text-primary' : 'text-transparent'
              }
            />
          </IconButton>
          <IconButton onClick={() => handleViewChange('grid')}>
            <GridView
              className={
                sortView === 'grid' ? 'text-primary' : 'text-transparent'
              }
            />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <List
      list={sortOptions}
      keyFn={(item) => item.name}
      classes="col-span-2 justify-self-end"
    >
      {(item) => <SortOption {...item} />}
    </List>
  );
}
