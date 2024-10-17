import { useQuery } from '@tanstack/react-query';
import Blog from './Blog';
import Loader from '../../../components/Loader';
import { fetchBlogs } from '../../../http';
import List from '../../../components/list/List';
import Typography from '../../../components/typography/Typography';
import Preloader from '../../../components/Preloader';

export default function Blogs() {
  const { status, data } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  return (
    <section className="flex flex-col items-center justify-center px-sides py-96">
      <Typography type="h2" classes="mb-64">
        Latest Blog
      </Typography>
      {status === 'pending' ? (
        <List
          list={Array(3).fill(null)}
          keyFn={(_, index) => index}
          classes="gap-32 w-full"
          itemClasses="basis-full flex"
        >
          {(_) => <Preloader height="h-[51rem]" />}
        </List>
      ) : (
        <List
          list={data}
          keyFn={(blog) => blog.id}
          classes="gap-32"
          itemClasses="flex-1 flex"
        >
          {(blog) => <Blog {...blog} />}
        </List>
      )}
    </section>
  );
}
