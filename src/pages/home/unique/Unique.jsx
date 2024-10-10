import Dot from '../../../components/Dot';
import IconItem from '../../../components/IconItem';
import List from '../../../components/List';
import H3 from '../../../typography/heading/H3';
import couchImage from '../../../assets/image/couch.png';
import Decor from '../../../assets/svg/decor.svg';
import Button from '../../../components/Button';
import Sub4 from '../../../typography/subtitle/Sub4';
import BodySmall from '../../../typography/body/BodySmall';
import Body from '../../../typography/body/Body';

export default function Unique() {
  const featuresList = [
    {
      icon: <Dot style="bg-primary w-12 h-12" />,
      text: (
        <Body style="text-gray-3">
          All frames constructed with hardwood solids and laminates
        </Body>
      ),
    },
    {
      icon: <Dot style="bg-info w-12 h-12" />,
      text: (
        <Body style="text-gray-3">
          Reinforced with double wood dowels, glue, screw - nails corner{' '}
        </Body>
      ),
    },
    {
      icon: <Dot style="bg-success w-12 h-12" />,
      text: (
        <Body style="text-gray-3">
          Arms, backs and seats are structurally reinforced
        </Body>
      ),
    },
  ];

  return (
    <section className="px-sides gap-128 flex items-center bg-[#F1F0FF] py-32">
      <div className="grid">
        <Decor className="col-start-1 col-end-2 row-start-1 row-end-2 -translate-x-60 text-[#F5E1FC]" />
        <img
          src={couchImage}
          alt="Comfy couch"
          className="z-10 col-start-1 col-end-2 row-start-1 row-end-2"
        />
      </div>
      <div className="flex flex-col gap-48">
        <H3>Unique Features Of latest & Trending Poducts</H3>
        <List
          list={featuresList}
          keyFn={(item) => item.text}
          style="flex-col gap-16"
        >
          {(item) => <IconItem {...item} style="gap-16" />}
        </List>
        <div className="flex items-center gap-16">
          <Button>
            <Sub4>Add To Cart</Sub4>
          </Button>
          <BodySmall>
            B&B Italian Sofa <span className="block">$32.00</span>
          </BodySmall>
        </div>
      </div>
    </section>
  );
}
