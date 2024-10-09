import ComplexInput from '../../components/ComplexInput';
import Logo from '../../components/Logo';
import Links from './Links';

import SearchIcon from '../../assets/svg/search.svg';

export default function NavBar() {
  return (
    <nav className="px-sides flex py-24">
      <Logo />
      <Links />
      <ComplexInput
        type="search"
        placeholder="Search"
        buttonContent={<SearchIcon />}
      />
    </nav>
  );
}
