import Typography from '../../components/typography/Typography';
import ProductLister from './product-lister/ProductLister';

export default function Products() {
  return (
    <>
      <Typography type="h1" classes="mt-64 mb-96 text-center">
        Products
      </Typography>
      <ProductLister />
    </>
  );
}
