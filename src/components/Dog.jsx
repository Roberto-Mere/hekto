import dog from '../assets/image/dog.png';
import Typography from './typography/Typography';

export default function Dog() {
  return (
    <div className="dog absolute left-48 top-[50rem]">
      <img src={dog} alt="Dog holding sign" className="h-[26vh]" />
      <Typography
        type="sub1"
        classes="absolute bottom-[7.2rem] left-64 max-w-[8vw] text-center"
      >
        Please turn off the light!
      </Typography>
    </div>
  );
}
