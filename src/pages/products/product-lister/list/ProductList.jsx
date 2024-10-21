import List from '../../../../components/list/List';
import Preloader from '../../../../components/Preloader';
import ProductListrCardWide from './ProductListCardWide';
import ProductListCard from './ProductListCard';

export default function ProductList({ fetchingStatus, products }) {
  return (
    <main>
      {fetchingStatus == 'pending' ? (
        <List
          list={Array(5).fill(null)}
          keyFn={(_, index) => index}
          itemClasses=""
          //   classes="flex-col gap-32"
          classes="grid grid-cols-3 gap-32"
        >
          {/* {(_) => <Preloader height="h-[22vh]" />} */}
          {(_) => <Preloader height="h-[44vh]" />}
        </List>
      ) : (
        <List
          list={products}
          keyFn={(product) => product.id}
          itemClasses=""
          //   classes="flex-col gap-32"
          classes="grid grid-cols-3 gap-32"
        >
          {/* {(product) => <ProductListCardWide {...product} />} */}
          {(product) => <ProductListCard {...product} />}
        </List>
      )}
    </main>
  );
}
