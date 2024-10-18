import { useState } from 'react';
import List from '../list/List';
import Romboid from '../../assets/svg/romboid.svg';
import Rectangle from '../Rectangle';
import Dot from '../Dot';

export default function ButtonSlider({
  initialSlides,
  fetchSlide,
  buttonType,
  classes = '',
  buttonsClasses = '',
}) {
  const [currSlide, setCurrSlide] = useState(0);
  const [currSlides, setCurrSlides] = useState(initialSlides);

  async function goToSlide(slide) {
    setCurrSlide(slide);

    if (slide + 1 !== currSlides.length && !currSlides[slide + 1]) {
      const nextSlide = await fetchSlide(slide + 1);

      setCurrSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[slide + 1] = nextSlide;

        return newSlides;
      });
    }

    if (!currSlides[slide]) {
      const nextSlide = await fetchSlide(slide);

      setCurrSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[slide] = nextSlide;

        return newSlides;
      });
    }
  }

  const buttons = initialSlides.map((_, index) => {
    const isActive = currSlide === index;

    return (
      <button onClick={() => goToSlide(index)}>
        {buttonType === 'romboid' ? (
          <Romboid className={isActive ? 'text-primary' : 'text-transparent'} />
        ) : buttonType === 'rectangle' ? (
          <Rectangle isActive={isActive} />
        ) : (
          <Dot
            classes={`h-8 w-8 border border-primary ${isActive ? 'bg-primary' : ''}`}
          />
        )}
      </button>
    );
  });

  return (
    <div className={classes ? classes : null} data-testid="slider">
      <List
        list={currSlides}
        keyFn={(_, index) => index}
        classes="overflow-x-clip"
        itemClasses="shrink-0 basis-full"
      >
        {(slide, index) => (
          <div
            style={{ transform: `translateX(${-currSlide * 100}%)` }}
            className={`h-full transition-all duration-700 ease-in-out ${currSlide !== index ? 'group/hidden' : ''}`}
            data-testid="slide"
          >
            {slide}
          </div>
        )}
      </List>
      <List list={buttons} keyFn={(_, index) => index} classes={buttonsClasses}>
        {(btn) => btn}
      </List>
    </div>
  );
}
