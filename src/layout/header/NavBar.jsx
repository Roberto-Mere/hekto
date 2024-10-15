import ComplexInput from '../../components/complex-input/ComplexInput';
import Logo from '../../components/Logo';
import Links from './Links';

import SearchIcon from '../../assets/svg/search.svg';

export default function NavBar() {
  return (
    <nav className="flex items-center px-sides py-16">
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
