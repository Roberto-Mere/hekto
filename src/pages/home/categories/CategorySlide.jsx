import { useQuery } from '@tanstack/react-query';
import { fetchCategoriesSlice } from '../../../http';
import List from '../../../components/list/List';
import Preloader from '../../../components/Preloader';
import CategoryCard from '../../../components/CategoryCard';

export default function CategorySlide({ slide }) {
  const { data, status } = useQuery({
    queryKey: ['category', `${slide}`],
    queryFn: () => fetchCategoriesSlice(slide, 4),
  });

  return (
    <>
      {status == 'pending' ? (
        <List
          list={Array(4).fill(null)}
          keyFn={(_, index) => index}
          itemClasses="basis-full"
          classes="gap-64"
        >
          {(_) => <Preloader height="h-[31vh]" />}
        </List>
      ) : (
        <List
          list={data}
          keyFn={(item) => item.id}
          itemClasses="basis-full flex justify-center items-center h-max"
          classes="gap-64"
        >
          {(item) => <CategoryCard {...item} />}
        </List>
      )}
    </>
  );
}
