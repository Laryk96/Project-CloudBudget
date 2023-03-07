import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const LabelLogo = styled.span`
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
`;
export { LogoLink, LabelLogo };
