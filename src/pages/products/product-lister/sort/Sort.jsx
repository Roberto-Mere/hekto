import { useDispatch, useSelector } from 'react-redux';
import List from '../../../../components/list/List';
import Select from '../../../../components/select/Select';
import { productsActions } from '../../../../store';
import SortOption from './SortOption';
import SortView from './SortView';
import { useSearchParams } from 'react-router-dom';

export default function Sort() {
  const perPage = useSelector((state) => state.products.sort.perPage);
  const sortBy = useSelector((state) => state.products.sort.sortBy);
  const dispatch = useDispatch();
  const [_, setSearchParams] = useSearchParams();

  function handleSelectSortBy(option) {
    dispatch(productsActions.changeSortBy(option));
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('sortBy', option);

      return prevSearchParams;
    });
  }

  function handleSelectPerPage(option) {
    dispatch(productsActions.changePerPage(option));
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('perPage', option);

      return prevSearchParams;
    });
  }

  const perPageOptions = [
    { value: 3, label: '3' },
    { value: 6, label: '6' },
    { value: 12, label: '12' },
  ];
  const sortByOptions = [
    { value: 'asc', label: 'Price: Low -> High' },
    { value: 'desc', label: 'Price: High -> Low' },
    { value: 'atoz', label: 'Alphabetical: A -> Z' },
    { value: 'ztoa', label: 'Alphabetical: Z -> A' },
    { value: 'rat', label: 'Rating' },
  ];

  const sortOptions = [
    {
      name: 'Per Page',
      input: (
        <Select
          options={perPageOptions}
          size="small"
          selectedOption={perPage}
          onSelect={handleSelectPerPage}
        />
      ),
    },
    {
      name: 'Sort By',
      input: (
        <Select
          options={sortByOptions}
          selectedOption={sortBy}
          onSelect={handleSelectSortBy}
        />
      ),
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
      classes="col-span-2 justify-self-end gap-64 items-center"
    >
      {(item) => <SortOption {...item} />}
    </List>
  );
}
