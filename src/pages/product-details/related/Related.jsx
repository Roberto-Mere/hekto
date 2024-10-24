import { useQuery } from '@tanstack/react-query';
import List from '../../../components/list/List';
import Preloader from '../../../components/Preloader';
import ProductCard from '../../../components/ProductCard';
import Typography from '../../../components/typography/Typography';
import { fetchProductSlice } from '../../../http';
import { useParams } from 'react-router-dom';

export default function Related() {
  const params = useParams();
  const { data, status } = useQuery({
    queryKey: ['related', params.id],
    queryFn: () => fetchProductSlice(params.id / 4, 4),
  });

  return (
    <section className="flex flex-col justify-center px-[24rem] py-96">
      <Typography type="h2" classes="mb-64 px-64">
        Related
      </Typography>
      {status === 'pending' ? (
        <List
          list={Array(4).fill(null)}
          keyFn={(_, index) => index}
          itemClasses="basis-full"
          classes="gap-32 px-64"
        >
          {(_) => <Preloader height="h-[34vh]" />}
        </List>
      ) : (
        <List
          list={data}
          keyFn={(item) => item.id}
          itemClasses="basis-full flex h-[34vh]"
          classes="gap-32 px-64"
        >
          {(item) => <ProductCard {...item} />}
        </List>
      )}
    </section>
  );
}
