import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const CustomLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 15px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  border-radius: 10px;
  text-transform: uppercase;
  color: #ffffff;

  &:active {
    color: black;
  }

  transition: transform 200ms ease-in, background-color 200ms ease-in;
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #212121;
  }
`;

export { CustomLink };
