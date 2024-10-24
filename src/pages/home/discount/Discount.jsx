import Tabbed from '../../../components/tabbed/Tabbed';
import Typography from '../../../components/typography/Typography';
import DiscountTabContent from './DiscountTabContent';

export default function Discount() {
  const discountTabs = ['Headphones', 'Laptop', 'Game Console'];

  return (
    <section className="flex flex-col items-center px-sides pb-96">
      <Typography type="h2" classes="mb-16">
        Discount Item
      </Typography>
      <Tabbed
        tabs={discountTabs}
        classes="w-full"
        buttonsClasses="mb-48 gap-64 justify-center"
        RenderFn={DiscountTabContent}
      />
    </section>
  );
}
