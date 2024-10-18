import { useQuery } from '@tanstack/react-query';
import { fetchProductSlice } from '../../../http';
import ProductCard from '../../../components/ProductCard';
import List from '../../../components/list/List';
import Preloader from '../../../components/Preloader';

export default function FeaturedSlide({ slide }) {
  const { data, status } = useQuery({
    queryKey: ['featured', `${slide}`],
    queryFn: () => fetchProductSlice(slide, 4),
  });

  return (
    <>
      {status == 'pending' ? (
        <List
          list={Array(4).fill(null)}
          keyFn={(_, index) => index}
          itemClasses="basis-full"
          classes="gap-32 px-[6rem]"
        >
          {(_) => <Preloader height="h-[36.8rem]" />}
        </List>
      ) : (
        <List
          list={data}
          keyFn={(item) => item.id}
          itemClasses="basis-full flex h-[36.8rem]"
          classes="gap-32 px-[6rem]"
        >
          {(item) => <ProductCard {...item} />}
        </List>
      )}
    </>
  );
}
