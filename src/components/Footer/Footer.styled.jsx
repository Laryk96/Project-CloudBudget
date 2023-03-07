import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const FooterApp = styled.footer`
  padding: 85px 0;
`;

const Section = styled.section`
  max-width: 220px;
`;
const Title = styled.h2`
  margin-bottom: 33px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;

  color: #101010;
`;
const Text = styled.p`
  font-size: 12px;
  line-height: 1.5;

  color: #101010;
`;
const Icon = styled.img``;
const Wrapper = styled.div`
  margin-bottom: 22px;
`;

const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const StyledLink = styled(Link)`
  margin-bottom: 5px;
`;

const NetworkList = styled.ul`
  display: flex;
  gap: 16px;
`;

export {
  FooterApp,
  Title,
  Text,
  Icon,
  Wrapper,
  Section,
  ServicesList,
  StyledLink,
  NetworkList,
};
