import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../http';
import List from '../../../components/list/List';
import Preloader from '../../../components/Preloader';
import ProductListerCardWide from './ProductListerCardWide';
import ProductListerCard from './ProductListerCard';

export default function ProductLister() {
  const { data, status } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  });

  return (
    <section>
      {status == 'pending' ? (
        <List
          list={Array(5).fill(null)}
          keyFn={(_, index) => index}
          itemClasses=""
          //   classes="flex-col gap-32"
          classes="flex-col gap-32"
        >
          {/* {(_) => <Preloader height="h-[23.2rem]" />} */}
          {(_) => <Preloader height="h-[44.8rem]" />}
        </List>
      ) : (
        <List
          list={data}
          keyFn={(product) => product.id}
          itemClasses=""
          //   classes="flex-col gap-32"
          classes="grid grid-cols-3 gap-32"
        >
          {/* {(product) => <ProductListerCardWide {...product} />} */}
          {(product) => <ProductListerCard {...product} />}
        </List>
      )}
    </section>
  );
}
