import Dot from '../components/Dot';
import headlamp from '../assets/image/headlamp.png';
import Light from '../assets/svg/light.svg';
import { useEffect, useRef, useState } from 'react';
import Dog from './Dog';

export default function Lamp() {
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  const [showDog, setShowDog] = useState(false);
  const dogTimer = useRef(null);

  function toggleLight() {
    setIsTurnedOn((prevIsTurnedOn) => !prevIsTurnedOn);
    setShowDog(false);
  }

  useEffect(() => {
    if (isTurnedOn) {
      dogTimer.current = setTimeout(() => setShowDog(true), 7000);
    }
    return () => clearTimeout(dogTimer.current);
  }, [isTurnedOn]);

  return (
    <div className="relative z-10 ml-64">
      <div className="relative">
        <img
          src={headlamp}
          alt="Headlamp"
          className="peer absolute -top-128 z-10 h-[38rem] w-auto transition-all duration-700 ease-in-out hover:top-0"
        />
        {isTurnedOn ? (
          <Light className="absolute left-12 top-[20rem] text-background opacity-75 transition-all duration-700 ease-in-out peer-hover:top-[32rem]" />
        ) : (
          ''
        )}
      </div>
      <button className="absolute left-128 top-[48rem]" onClick={toggleLight}>
        <Dot classes="h-16 w-16 bg-primary" />
      </button>
      {showDog ? <Dog /> : null}
    </div>
  );
}
