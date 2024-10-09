import ComplexInput from '../../components/ComplexInput';
import Logo from '../../components/Logo';
import Links from './Links';

import SearchIcon from '../../assets/svg/search.svg';

export default function NavBar() {
  return (
    <nav>
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
