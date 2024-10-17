import ButtonSlider from '../../../components/button-slider/ButtonSlider';
import Typography from '../../../components/typography/Typography';
import Loader from '../../../components/Loader';
import FeaturedSlide from './FeaturedSlide';

export default function Featured() {
  function fetchSlide(slide) {
    return <FeaturedSlide slide={slide} />;
  }

  const initialSlides = [
    <FeaturedSlide slide={0} />,
    <FeaturedSlide slide={1} />,
    '',
    '',
  ];

  return (
    <section className="flex flex-col px-[24.2rem] py-96">
      <Typography type="h2" classes="mb-64 self-center">
        Featured Products
      </Typography>
      <ButtonSlider
        initialSlides={initialSlides}
        fetchSlide={fetchSlide}
        buttonType="rectangle"
        buttonsClasses="gap-8 mt-64 justify-center"
      />
    </section>
  );
}
