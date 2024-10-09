import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to={'/'}>
      <span className="text-h4 font-bold tracking-wide">Hekto</span>
    </Link>
  );
}
