import List from '../../components/List';
import { Link } from 'react-router-dom';

import Facebook from '../../assets/svg/facebook.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Instagram from '../../assets/svg/instagram.svg';

export default function Socials() {
  const socials = [<Facebook />, <Twitter />, <Instagram />];

  return (
    <List list={socials} keyFn={(_, index) => index} classes="gap-16">
      {(item) => (
        <Link className="block rounded-full bg-black p-4 text-white">
          {item}
        </Link>
      )}
    </List>
  );
}
