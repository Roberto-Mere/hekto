import { useState } from 'react';
import List from '../list/List';
import Romboid from '../../assets/svg/romboid.svg';
import Rectangle from '../Rectangle';
import Dot from '../Dot';

export default function ButtonSlider({
  slides,
  fetchSlide,
  btnType,
  classes = '',
  btnClasses = '',
}) {
  const [currSlide, setCurrSlide] = useState(0);
  const [currSlides, setCurrSlides] = useState(slides);

  async function goToSlide(slide) {
    setCurrSlide(slide);

    if (slide + 1 !== currSlides.length && !currSlides[slide + 1]) {
      const nextSlide = await fetchSlide(slide + 1);

      setCurrSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[slide + 1] = nextSlide;

        return newSlides;
      });
    } else if (!currSlides[slide]) {
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
          <Rectangle active={isActive} />
        ) : (
          <Dot
            classes={`h-8 w-8 border border-primary ${isActive ? 'bg-primary' : ''}`}
          />
        )}
      </button>
    );
  });

  return (
    <div className={classes}>
      <List
        list={currSlides}
        keyFn={(_, index) => index}
        classes={`overflow-hidden`}
        itemClasses="basis-full shrink-0"
      >
        {(slide) => (
          <div
            style={{ transform: `translateX(${-currSlide * 100}%)` }}
            className="transition-all duration-700 ease-in-out"
          >
            {slide}
          </div>
        )}
      </List>
      <List list={buttons} keyFn={(_, index) => index} classes={btnClasses}>
        {(btn) => btn}
      </List>
    </div>
  );
}
