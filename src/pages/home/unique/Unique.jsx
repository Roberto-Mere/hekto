import Dot from '../../../components/Dot';
import IconItem from '../../../components/IconItem';
import List from '../../../components/list/List';
import Button from '../../../components/Button';
import Typography from '../../../components/typography/Typography';

import couchImage from '../../../assets/image/couch.png';
import Decor from '../../../assets/svg/decor.svg';

export default function Unique() {
  const featuresList = [
    {
      icon: <Dot classes="bg-primary w-12 h-12" />,
      text: (
        <Typography type="body" classes="text-gray-3">
          All frames constructed with hardwood solids and laminates
        </Typography>
      ),
    },
    {
      icon: <Dot classes="bg-info w-12 h-12" />,
      text: (
        <Typography type="body" classes="text-gray-3">
          Reinforced with double wood dowels, glue, screw - nails corner{' '}
        </Typography>
      ),
    },
    {
      icon: <Dot classes="bg-success w-12 h-12" />,
      text: (
        <Typography type="body" classes="text-gray-3">
          Arms, backs and seats are structurally reinforced
        </Typography>
      ),
    },
  ];

  return (
    <section className="flex items-center gap-128 bg-background px-sides py-32">
      <div className="grid">
        <Decor className="grid-overlap -translate-x-64 text-[#F5E1FC]" />
        <img src={couchImage} alt="Comfy couch" className="grid-overlap z-10" />
      </div>
      <div className="flex flex-col gap-48">
        <Typography type="h3">
          Unique Features Of latest & Trending Poducts
        </Typography>
        <List
          list={featuresList}
          keyFn={(_, index) => index}
          classes="flex-col gap-16"
        >
          {(item) => <IconItem {...item} classes="gap-16" />}
        </List>
        <div className="flex items-center gap-16">
          <Button>
            <Typography type="sub4">Add To Cart</Typography>
          </Button>
          <Typography type="body-small">
            B&B Italian Sofa <span className="block">$32.00</span>
          </Typography>
        </div>
      </div>
    </section>
  );
}
