import CustomNavLink from 'components/CustomNavLink';
import Logo from 'components/Logo';
import { NavList, Header, Select, RightBox } from './AppBar.styled';
import LogIn from 'components/Buttons/LogIn';
import { Container } from 'MainLayout/MainLayout.styled';

const AppBar = () => {
  return (
    <Header>
      <Container style={{ justifyContent: 'space-between' }}>
        <Logo />
        <nav>
          <NavList>
            <li>
              <CustomNavLink to="/">OVERVIEW </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/">FEATURES</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/">TECHNOLOGY</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/">CONTACT</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/">Sign up</CustomNavLink>
            </li>
          </NavList>
        </nav>
        <RightBox>
          <form method="POST">
            <Select>
              <option value="en">EN</option>
              <option value="ua">UA</option>
            </Select>
          </form>
          <LogIn>LOGIN</LogIn>
        </RightBox>
      </Container>
    </Header>
  );
};

export default AppBar;
