import ButtonSlider from '../../../components/ButtonSlider';
import HeroSlide from './HeroSlide';

import headphones from '../../../assets/image/headphones.png';
import Lamp from '../../../components/Lamp';

export default function Hero() {
  const slidesContent = [
    {
      legend: 'Best Headphones For Your Life....',
      title: 'New Trendy Collection Headphones',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
      image: {
        src: headphones,
        alt: 'New Trendy Collection Headphones',
      },
    },
    {
      legend: 'Best Headphones For Your Life....',
      title: 'New Trendy Collection Headphones',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
      image: {
        src: headphones,
        alt: 'New Trendy Collection Headphones',
      },
    },
    {
      legend: 'Best Headphones For Your Life....',
      title: 'New Trendy Collection Headphones',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
      image: {
        src: headphones,
        alt: 'New Trendy Collection Headphones',
      },
    },
  ];

  const slides = [
    <HeroSlide {...slidesContent[0]} />,
    <HeroSlide {...slidesContent[1]} />,
    '',
  ];

  function getNextSlide(slide) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(<HeroSlide {...slidesContent[slide]} />);
      }, 1000),
    );
  }

  return (
    <section className="relative overflow-hidden bg-background">
      <Lamp />
      <ButtonSlider
        slides={slides}
        getNextSlide={getNextSlide}
        btnType="romboid"
        btnClasses="gap-16 justify-center"
      />
    </section>
  );
}
