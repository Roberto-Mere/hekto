import { useState } from 'react';
import List from '../list/List';
import Romboid from '../../assets/svg/romboid.svg';
import Rectangle from '../Rectangle';
import Dot from '../Dot';

export default function ButtonSlider({
  initialSlides,
  RenderFn,
  buttonType,
  classes = '',
  buttonsClasses = '',
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [fetchedSlides, setFetchedSlides] = useState(initialSlides);

  function goToSlide(slide) {
    setActiveSlide(slide);

    if (slide + 1 !== fetchedSlides.length && !fetchedSlides[slide + 1]) {
      setFetchedSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[slide + 1] = true;

        return newSlides;
      });
    }

    if (!fetchedSlides[slide]) {
      setFetchedSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[slide] = true;

        return newSlides;
      });
    }
  }

  const buttons = initialSlides.map((_, index) => {
    const isActive = activeSlide === index;

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
        list={fetchedSlides}
        keyFn={(_, index) => index}
        classes="overflow-x-clip"
        itemClasses="shrink-0 basis-full"
      >
        {(slide, index) => (
          <div
            style={{ transform: `translateX(${-activeSlide * 100}%)` }}
            className={`h-full transition-all duration-700 ease-in-out ${activeSlide !== index ? 'group/hidden' : ''}`}
            data-testid="slide"
          >
            {slide ? <RenderFn slide={index} /> : null}
          </div>
        )}
      </List>
      <List list={buttons} keyFn={(_, index) => index} classes={buttonsClasses}>
        {(btn) => btn}
      </List>
    </div>
  );
}
