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
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const queryParams = [
    { name: 'brand', options: filters.brand },
    { name: 'discount', options: filters.discount },
    { name: 'rating', options: filters.rating },
    { name: 'category', options: filters.category },
  ];

  const query = constructFetchQuery(queryParams);

  const { data, status } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(query),
  });

  useEffect(() => {
    const brandParam = searchParams.get('brand');
    const discountParam = searchParams.get('discount');
    const ratingParam = searchParams.get('rating');
    const categoryParam = searchParams.get('category');
    const priceParam = searchParams.get('category');

    dispatch(
      productsActions.setFilters({
        brand: brandParam ? brandParam.split('|') : [],
        discount: discountParam ? discountParam.split('|') : [],
        rating: ratingParam ? ratingParam.split('|') : [],
        category: categoryParam ? categoryParam.split('|') : [],
        price: priceParam ? priceParam.split('|') : [],
      }),
    );
  }, []);

  return (
    <div className="grid-lister mb-64 grid gap-x-[17.2rem] gap-y-32 px-sides">
      <Sort />
      <Filters />
      <ProductList fetchingStatus={status} products={data} />
    </div>
  );
}
