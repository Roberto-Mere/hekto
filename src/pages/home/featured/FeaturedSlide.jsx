import { useQuery } from '@tanstack/react-query';
import { fetchProductSlide } from '../../../http';
import Loader from '../../../components/Loader';
import ProductCard from '../../../components/ProductCard';
import List from '../../../components/list/List';
import ProductCardPreloader from '../../../components/ProductCardPreloader';

export default function FeaturedSlide({ slide }) {
  const { data, status } = useQuery({
    queryKey: ['featured', `${slide}`],
    queryFn: () => fetchProductSlide(slide),
  });

  return (
    <>
      {status == 'pending' ? (
        <List
          list={['', '', '', '']}
          keyFn={(_, index) => index}
          itemClasses="basis-full flex"
          classes="h-full w-full gap-32 px-[6rem]"
        >
          {(_) => <ProductCardPreloader />}
        </List>
      ) : (
        <List
          list={data}
          keyFn={(item) => item.id}
          itemClasses="basis-full flex"
          classes="h-full w-full gap-32 px-[6rem]"
        >
          {(item) => <ProductCard {...item} />}
        </List>
      )}
    </>
  );
}
