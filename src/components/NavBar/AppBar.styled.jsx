import styled from '@emotion/styled';

const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

const Header = styled.header`
  position: absolute;
  padding: 30px 0;
  left: 50%;
  transform: translateX(-50%);
  /* background: linear-gradient(
    90deg,
    rgba(213, 32, 71, 0.8) 0%,
    rgba(238, 61, 27, 0.8) 100%
  ); */
`;
const Select = styled.select`
  display: block;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  border: none;
  background-color: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #212121;
  }
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export { NavList, Header, Select, RightBox };
