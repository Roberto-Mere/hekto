import ButtonSlider from '../../../components/button-slider/ButtonSlider';
import Typography from '../../../components/typography/Typography';
import FeaturedSlide from './FeaturedSlide';

export default function Featured() {
  const initialSlides = [true, true, false, false];

  return (
    <section className="flex flex-col px-[23.6rem] py-96">
      <Typography type="h2" classes="mb-64 self-center">
        Featured Products
      </Typography>
      <ButtonSlider
        initialSlides={initialSlides}
        RenderFn={FeaturedSlide}
        buttonType="rectangle"
        buttonsClasses="gap-8 mt-64 justify-center"
      />
    </section>
  );
}
