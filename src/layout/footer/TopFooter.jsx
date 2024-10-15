import LinksColumn from '../../components/LinksColumn';
import List from '../../components/list/List';
import FooterSignUp from './FooterSignUp';

export default function TopFooter() {
  const categories = [
    { name: 'Watches', to: '/' },
    { name: 'Headphones', to: '/' },
    { name: 'Laptops', to: '/' },
    { name: 'Consoles', to: '/' },
    { name: 'Jewellery', to: '/' },
  ];

  const customerCare = [
    { name: 'My Account', to: '/' },
    { name: 'Discount', to: '/' },
    { name: 'Returns', to: '/' },
    { name: 'Orders History', to: '/' },
    { name: 'Order Tracking', to: '/' },
  ];

  const pages = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/' },
    { name: 'Categories', to: '/' },
    { name: 'Blog', to: '/' },
    { name: 'Contact', to: '/' },
  ];

  const footerColumns = [
    <FooterSignUp />,
    <LinksColumn title="Categories" list={categories} />,
    <LinksColumn title="Customer Care" list={customerCare} />,
    <LinksColumn title="Categories" list={pages} />,
  ];

  return (
    <section className="px-sides pb-128 pt-96">
      <List list={footerColumns} keyFn={(_, index) => index} classes="gap-128">
        {(item) => item}
      </List>
    </section>
  );
}
