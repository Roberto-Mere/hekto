import Button from '../../../components/Button';
import PromotionImage from '../../../components/PromotionImage';
import Typography from '../../../components/typography/Typography';

export default function HeroSlide({ legend, title, description, image }) {
  return (
    <div className={`flex items-center gap-64 pb-24 pl-[42rem] pt-32`}>
      <div className="max-w-[60rem]">
        <div className="mb-24 flex flex-col gap-16">
          <Typography type="body-bold" classes="text-primary">
            {legend}
          </Typography>
          <Typography type="h1">{title}</Typography>
          <Typography type="body" classes="text-gray-3">
            {description}
          </Typography>
        </div>
        <Button>
          <Typography type="sub4">Shop Now</Typography>
        </Button>
      </div>
      <PromotionImage {...image} />
    </div>
  );
}
