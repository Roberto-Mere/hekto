import Contacts from './Contacts';
import Menu from './Menu';

export default function TopBar() {
  return (
    <div className="flex justify-between bg-tertiary px-sides py-12">
      <Contacts />
      <Menu />
    </div>
  );
}
