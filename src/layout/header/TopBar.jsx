import List from '../../components/List';

import Contacts from './Contacts';
import Menu from './Menu';

export default function TopBar() {
  return (
    <div className="px-sides flex justify-between bg-tertiary py-12">
      <Contacts />
      <Menu />
    </div>
  );
}
