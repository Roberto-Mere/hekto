import ButtonSlider from '../../../components/button-slider/ButtonSlider';
import Typography from '../../../components/typography/Typography';
import CategorySlide from './CategorySlide';

export default function Categories() {
  function fetchSlide(slide) {
    return <CategorySlide slide={slide} />;
  }

  const initialSlides = [true, true, false];

  return (
    <section className="flex flex-col px-sides py-96">
      <Typography type="h2" classes="mb-64 self-center">
        Top Categories
      </Typography>
      <ButtonSlider
        initialSlides={initialSlides}
        RenderFn={CategorySlide}
        fetchSlide={fetchSlide}
        buttonsClasses="gap-16 mt-64 justify-center"
      />
    </section>
  );
}
