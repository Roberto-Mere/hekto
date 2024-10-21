import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../../../http';
import Loader from '../../../components/Loader';
import Typography from '../../../components/typography/Typography';
import Button from '../../../components/button/Button';
import List from '../../../components/list/List';
import IconItem from '../../../components/IconItem';
import Checkmark from '../../../assets/svg/checkmark.svg';
import DecorImage from '../../../components/DecorImage';
import headphones from '../../../assets/image/headphones.png';
import laptop from '../../../assets/image/laptop.png';
import gameConsole from '../../../assets/image/game-console.png';

export default function DiscountTabContent({ tab }) {
  const tabContents = {
    Headphones: { id: 2, image: headphones },
    Laptop: { id: 3, image: laptop },
    'Game Console': { id: 5, image: gameConsole },
  };

  const { data, status } = useQuery({
    queryKey: ['discounts', `${tab}`],
    queryFn: () => fetchProduct(tabContents[tab].id),
  });

  const details = [
    'Material expose like metals',
    'Clear lines and geomatric figures',
    'Simple neutral colours',
    'Slick and modern design',
  ];

  return (
    <>
      {status === 'pending' ? (
        <div className="h-[43.7rem]">
          <Loader />
        </div>
      ) : (
        <article className="flex items-center justify-between">
          <div className="flex max-w-[64rem] flex-col items-start gap-24">
            <Typography type="h3">20% Discount Of All Products</Typography>
            <Typography type="sub2">{data.name}</Typography>
            <Typography type="body-large" classes="text-gray-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </Typography>
            <List
              list={details}
              keyFn={(_, index) => index}
              classes="flex-wrap"
              itemClasses="basis-1/2"
            >
              {(item) => (
                <IconItem
                  icon={<Checkmark />}
                  text={<Typography classes="text-gray-3">{item}</Typography>}
                  classes="gap-8"
                />
              )}
            </List>
            <Button>
              <Typography type="sub4">Shop Now</Typography>
            </Button>
          </div>
          <DecorImage
            src={tabContents[tab].image}
            alt={data.name}
            id={tabContents[tab].id}
          />
        </article>
      )}
    </>
  );
}
