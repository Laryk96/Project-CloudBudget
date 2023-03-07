import logo from 'images/logo.svg';
import { LogoLink, LabelLogo } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink to="/">
      <img src={logo} alt="Logo" width={30} />
      <LabelLogo>CloudBudget</LabelLogo>
    </LogoLink>
  );
};

export default Logo;
