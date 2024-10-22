import List from '../../../../components/list/List';
import Stars from '../../../../components/Stars';
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
      filterColor: 'info',
    },
    {
      title: 'Discount Offer',
      filters: [
        { label: '5% Off', id: 'discount5' },
        { label: '20% Off', id: 'discount20' },
        { label: '50% Off', id: 'discount50' },
      ],
      filterColor: 'info',
    },

    {
      title: 'Rating',
      filters: [
        {
          label: <Stars stars={1} />,
          id: 'stars1',
        },
        { label: <Stars stars={2} />, id: 'stars2' },
        { label: <Stars stars={3} />, id: 'stars3' },
        { label: <Stars stars={4} />, id: 'stars4' },
        { label: <Stars stars={5} />, id: 'stars5' },
      ],
      filterColor: 'secondary',
    },
    {
      title: 'Categories',
      filters: [
        { label: 'Watches', id: 'watches' },
        { label: 'Headphones', id: 'Headphones' },
        { label: 'Laptops', id: 'laptops' },
        { label: 'Game Consoles', id: 'consoles' },
        { label: 'Clothes', id: 'clothes' },
        { label: 'Perfumes', id: 'perfumes' },
        { label: 'Jewellery', id: 'jewellery' },
      ],
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
      filterColor: 'info',
    },
  ];

  return (
    <aside>
      <List
        list={filterBlocks}
        keyFn={(block) => block.title}
        classes="flex-col gap-48"
      >
        {(block) => <FilterBlock {...block} />}
      </List>
    </aside>
  );
}
