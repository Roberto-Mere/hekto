import { useQuery } from '@tanstack/react-query';
import List from '../../../components/list/List';
import ProductCardWide from '../../../components/ProductCardWide';
import { fetchProductSlice } from '../../../http';
import Preloader from '../../../components/Preloader';

export default function DiscountTabContent({ tab }) {
  const tabContents = {
    'New Arrival': 1,
    'Best Seller': 2,
    Featured: 3,
    'Special Offer': 4,
  };

  const { data, status } = useQuery({
    queryKey: ['latest', `${tab}`],
    queryFn: () => fetchProductSlice(tabContents[tab], 6),
  });

  return (
    <article>
      {status === 'pending' ? (
        <List
          list={Array(6).fill(null)}
          keyFn={(_, index) => index}
          itemClasses=""
          classes="gap-32 grid grid-cols-3"
        >
          {(_) => <Preloader height="h-[28vh]" />}
        </List>
      ) : (
        <List
          list={data}
          keyFn={(product) => product.id}
          classes="gap-32 grid grid-cols-3"
        >
          {(product) => <ProductCardWide {...product} />}
        </List>
      )}
    </article>
  );
}
