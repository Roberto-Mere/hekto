import IconButton from '../../../../components/IconButton';
import ListView from '../../../../assets/svg/list-view.svg';
import GridView from '../../../../assets/svg/grid-view.svg';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../../../store';
import { useSearchParams } from 'react-router-dom';

export default function SortView() {
  const sortView = useSelector((state) => state.products.sort.view);
  const dispatch = useDispatch();
  const [_, setSearchParams] = useSearchParams();

  function handleViewChange(view) {
    dispatch(productsActions.changeView(view));
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('view', view);

      return prevSearchParams;
    });
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
