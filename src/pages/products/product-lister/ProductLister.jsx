import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../http';
import ProductList from './list/ProductList';
import Sort from './sort/Sort';
import Filters from './filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { constructFetchQuery } from '../../../utils';
import { useEffect } from 'react';
import { productsActions } from '../../../store';

export default function ProductLister() {
  const filters = useSelector((state) => state.products.filters);
  const sortPerPage = useSelector((state) => state.products.sort.perPage);
  const sortPage = useSelector((state) => state.products.sort.page);
  const sortBy = useSelector((state) => state.products.sort.sortBy);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const priceRanges = {
    cheapest: '^[0-9]$',
    cheap: '^1[0-9]$|^2[0-4]$',
    regular: '^2[5-9]$|^[34][0-9]$',
    expensive: '^[56789][0-9]$',
    expensivest: '^[1-9]\\d{2,}$',
  };

  const queryParams = [
    { name: 'brand', options: filters.brand },
    { name: 'discount', options: filters.discount },
    { name: 'rating', options: filters.rating },
    { name: 'category', options: filters.category },
    {
      name: 'price',
      options: filters.price.map((range) => priceRanges[range]),
    },
  ];

  const sort = { page: sortPage, perPage: sortPerPage, by: sortBy };

  const query = constructFetchQuery(queryParams, sort);

  const { data, status } = useQuery({
    queryKey: ['products', filters, sort],
    queryFn: () => fetchProducts(query),
  });

  useEffect(() => {
    const brandParam = searchParams.get('brand');
    const discountParam = searchParams.get('discount');
    const ratingParam = searchParams.get('rating');
    const categoryParam = searchParams.get('category');
    const priceParam = searchParams.get('price');

    const perPageParam = searchParams.get('perPage');
    const pageParam = searchParams.get('page');
    const sortByParam = searchParams.get('sortBy');
    const viewParam = searchParams.get('view');

    dispatch(
      productsActions.setFilters({
        brand: brandParam ? brandParam.split('|') : [],
        discount: discountParam ? discountParam.split('|') : [],
        rating: ratingParam ? ratingParam.split('|') : [],
        category: categoryParam ? categoryParam.split('|') : [],
        price: priceParam ? priceParam.split('|') : [],
      }),
    );

    dispatch(
      productsActions.setSort({
        perPage: perPageParam ? +perPageParam : 6,
        page: pageParam ? +pageParam : 1,
        sortBy: sortByParam ?? 'asc',
        view: viewParam ?? 'list',
      }),
    );

    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('perPage', perPageParam ? +perPageParam : 6);
      prevSearchParams.set('page', pageParam ? +pageParam : 1);
      prevSearchParams.set('sortBy', sortByParam ?? 'asc');
      prevSearchParams.set('view', viewParam ?? 'list');

      return prevSearchParams;
    });
  }, []);

  return (
    <div className="grid-lister mb-64 grid gap-x-[17.2rem] gap-y-32 px-sides">
      <Sort />
      <Filters />
      <ProductList fetchingStatus={status} products={data} />
    </div>
  );
}
