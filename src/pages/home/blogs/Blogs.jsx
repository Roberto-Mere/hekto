import { useQuery } from '@tanstack/react-query';
import Blog from './Blog';
import Loader from '../../../components/Loader';
import { fetchBlogs } from '../../../http';
import List from '../../../components/list/List';
import Typography from '../../../components/typography/Typography';

export default function Blogs() {
  const { isPending, data } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  return (
    <section className="flex flex-col items-center justify-center px-sides py-96">
      <Typography type="h2" classes="mb-64">
        Latest Blog
      </Typography>
      {isPending ? (
        <Loader />
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
