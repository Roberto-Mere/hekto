import dog from '../assets/image/dog.png';
import Typography from './typography/Typography';

export default function Dog() {
  return (
    <div className="dog absolute -bottom-[78rem] left-48">
      <img src={dog} alt="Dog holding sign" className="h-[26vh]" />
    </div>
  );
}
