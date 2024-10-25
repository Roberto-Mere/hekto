import { useQuery } from '@tanstack/react-query';
import { fetchProductSlice } from '../../../http';
import Typography from '../../../components/typography/Typography';
import ProductCardSmall from '../../../components/ProductCardSmall';
import List from '../../../components/list/List';
import Preloader from '../../../components/Preloader';

export default function Trending() {
  const slide = Math.round(Math.random() * 3);

  const { data, status } = useQuery({
    queryKey: ['trending'],
    queryFn: () => fetchProductSlice(slide, 4),
  });
  return (
    <section className="flex flex-col items-center justify-center px-sides py-96">
      <Typography type="h2" classes="mb-64">
        Trending Products
      </Typography>
      {status === 'pending' ? (
        <List
          list={Array(4).fill(null)}
          keyFn={(_, index) => index}
          classes="gap-32 w-full"
          itemClasses="basis-full flex"
        >
          {(_) => <Preloader height="h-[32vh]" />}
        </List>
      ) : (
        <List
          list={data}
          keyFn={(product) => product.id}
          classes="gap-32"
          itemClasses="flex-1 flex h-[32vh]"
        >
          {(product) => <ProductCardSmall {...product} />}
        </List>
      )}
    </section>
  );
}
