import IconButton from '../../../../components/IconButton';
import ListView from '../../../../assets/svg/list-view.svg';
import GridView from '../../../../assets/svg/grid-view.svg';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../../../store';

export default function SortView() {
  const sortView = useSelector((state) => state.products.view);
  const dispatch = useDispatch();

  function handleViewChange(view) {
    dispatch(productsActions.changeView(view));
  }

  return (
    <div className="flex gap-16">
      <IconButton onClick={() => handleViewChange('list')}>
        <ListView
          className={sortView === 'list' ? 'text-primary' : 'text-transparent'}
        />
      </IconButton>
      <IconButton onClick={() => handleViewChange('grid')}>
        <GridView
          className={sortView === 'grid' ? 'text-primary' : 'text-transparent'}
        />
      </IconButton>
    </div>
  );
}
