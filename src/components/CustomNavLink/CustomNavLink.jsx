import { CustomLink } from './CustomNavLink.styled';

const CustomNavLink = prop => {
  const { children } = prop;

  return <CustomLink {...prop}>{children}</CustomLink>;
};

export default CustomNavLink;
