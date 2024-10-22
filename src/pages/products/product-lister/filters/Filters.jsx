import Button from '../../../../components/button/Button';
import List from '../../../../components/list/List';
import Stars from '../../../../components/Stars';
import Typography from '../../../../components/typography/Typography';
import FilterBlock from './FilterBlock';

export default function Filters() {
  const filterBlocks = [
    {
      title: 'Product Brand',
      filters: [
        { label: 'Casio', id: 'casio' },
        { label: 'Apple', id: 'apple' },
        { label: 'Sony', id: 'sony' },
        { label: 'Nike', id: 'nike' },
        { label: 'Vke', id: 'vke' },
        { label: 'Glossiness', id: 'glossiness' },
      ],
      type: 'brand',
      filterColor: 'info',
    },
    {
      title: 'Discount Offer',
      filters: [
        { label: '5% Off', id: '5' },
        { label: '20% Off', id: '20' },
        { label: '50% Off', id: '50' },
      ],
      type: 'discount',
      filterColor: 'info',
    },

    {
      title: 'Rating',
      filters: [
        { label: <Stars stars={1} />, id: '1' },
        { label: <Stars stars={2} />, id: '2' },
        { label: <Stars stars={3} />, id: '3' },
        { label: <Stars stars={4} />, id: '4' },
        { label: <Stars stars={5} />, id: '5' },
      ],
      type: 'rating',
      filterColor: 'secondary',
    },
    {
      title: 'Categories',
      filters: [
        { label: 'Watches', id: 'watches' },
        { label: 'Headphones', id: 'headphones' },
        { label: 'Laptops', id: 'laptops' },
        { label: 'Game Consoles', id: 'consoles' },
        { label: 'Clothes', id: 'clothes' },
        { label: 'Perfumes', id: 'perfumes' },
        { label: 'Jewellery', id: 'jewellery' },
      ],
      type: 'category',
      filterColor: 'primary',
    },
    {
      title: 'Price',
      filters: [
        { label: '$0 - $10', id: 'cheapest' },
        { label: '$10 - $25', id: 'cheap' },
        { label: '$25 - $50', id: 'regular' },
        { label: '$50 - $100', id: 'expensive' },
        { label: '$100+', id: 'expensivest' },
      ],
      type: 'price',
      filterColor: 'primary',
    },
  ];

  return (
    <aside>
      <List
        list={filterBlocks}
        keyFn={(block) => block.title}
        classes="flex-col gap-48 mb-48"
      >
        {(block) => <FilterBlock {...block} />}
      </List>
    </aside>
  );
}
