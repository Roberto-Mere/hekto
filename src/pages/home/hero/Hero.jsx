import ButtonSlider from '../../../components/button-slider/ButtonSlider';
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

  const initialSlides = [true, true, false];

  return (
    <section className="relative overflow-hidden bg-background pb-40">
      <Lamp />
      <ButtonSlider
        initialSlides={initialSlides}
        RenderFn={({ slide }) => <HeroSlide {...slidesContent[slide]} />}
        buttonType="romboid"
        buttonsClasses="gap-16 justify-center"
        timer={10}
      />
    </section>
  );
}
