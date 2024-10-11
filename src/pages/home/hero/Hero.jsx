import Dot from '../../../components/Dot';
import ButtonSlider from '../../../components/ButtonSlider';
import HeroSlide from './HeroSlide';

import headphones from '../../../assets/image/headphones.png';
import headlamp from '../../../assets/image/headlamp.png';

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

  const slides = slidesContent.map((content) => <HeroSlide {...content} />);

  return (
    <section className="relative bg-background">
      <img
        src={headlamp}
        alt="Headlamp"
        className="absolute z-10 ml-64 h-[38rem] w-auto"
      />
      <Dot classes="absolute left-192 top-3/4 h-16 w-16 bg-primary z-10" />
      <ButtonSlider
        slides={slides}
        btnType="romboid"
        btnClasses="gap-16 justify-center"
      />
    </section>
  );
}
