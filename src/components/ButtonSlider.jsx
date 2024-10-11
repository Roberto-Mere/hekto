import List from './List';
import Romboid from '../assets/svg/romboid.svg';
import { useState } from 'react';

export default function ButtonSlider({
  slides,
  btnType,
  classes = '',
  btnClasses = '',
}) {
  const [currSlide, setCurrSlide] = useState(0);

  function goToSlide(slide) {
    setCurrSlide(slide);
  }

  const buttons = slides.map((_, index) => (
    <button>
      {btnType === 'romboid' ? (
        <Romboid
          className={currSlide === index ? 'text-primary' : 'text-transparent'}
          onClick={() => goToSlide(index)}
        />
      ) : (
        ''
      )}
    </button>
  ));

  return (
    <div className={classes}>
      <List
        list={slides}
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
