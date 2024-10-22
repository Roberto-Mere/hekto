import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../http';
import ProductList from './list/ProductList';
import Sort from './sort/Sort';
import Filters from './filters/Filters';

export default function ProductLister() {
  const { data, status } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return (
    <div className="grid-lister grid gap-x-[17.2rem] gap-y-32 px-sides">
      <Sort />
      <Filters />
      <ProductList fetchingStatus={status} products={data} />
    </div>
  );
}
