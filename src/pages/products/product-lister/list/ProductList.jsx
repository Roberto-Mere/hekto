import List from '../../../../components/list/List';
import Preloader from '../../../../components/Preloader';
import ProductListCardWide from './ProductListCardWide';
import ProductListCard from './ProductListCard';
import { useSelector } from 'react-redux';
import Typography from '../../../../components/typography/Typography';

export default function ProductList({ fetchingStatus, products }) {
  const sortView = useSelector((state) => state.products.sort.view);
  const sortPerPage = useSelector((state) => state.products.sort.perPage);

  return (
    <main>
      {fetchingStatus == 'pending' ? (
        <List
          list={Array(sortPerPage).fill(null)}
          keyFn={(_, index) => index}
          classes={
            sortView === 'list' ? 'flex-col gap-32' : 'grid grid-cols-3 gap-32'
          }
        >
          {(_) => (
            <Preloader height={sortView === 'list' ? 'h-[22vh]' : 'h-[44vh]'} />
          )}
        </List>
      ) : (
        <>
          {products.length > 0 ? (
            <List
              list={products}
              keyFn={(product) => product.id}
              classes={
                sortView === 'list'
                  ? 'flex-col gap-32'
                  : 'grid grid-cols-3 gap-32'
              }
            >
              {(product) =>
                sortView === 'list' ? (
                  <ProductListCardWide {...product} />
                ) : (
                  <ProductListCard {...product} />
                )
              }
            </List>
          ) : (
            <Typography type="sub1" classes="text-center mt-24">
              No matches... Try again
            </Typography>
          )}
        </>
      )}
    </main>
  );
}
