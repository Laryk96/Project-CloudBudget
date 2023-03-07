import { Container } from 'MainLayout/MainLayout.styled';

import facebook from 'images/face.svg';
import linkedin from 'images/linki.svg';
import twitter from 'images/twitter.svg';
import support from 'images/support.png';
import {
  Section,
  FooterApp,
  Title,
  Text,
  ServicesList,
  StyledLink,
  NetworkList,
  Wrapper,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterApp>
      <Container style={{ gap: '105px' }}>
        <Section>
          <Title>Address</Title>
          <Text>
            Pipang Ltd, Griva Digeni, 81-83 Jacovides Tower, 1st Floor 1090
            Picosia USA
          </Text>
        </Section>
        <Section>
          <Title>Services</Title>
          <ServicesList>
            <li>
              <Text>Overview</Text>
            </li>
            <li>
              <Text>Features</Text>
            </li>
            <li>
              <Text>Technology</Text>
            </li>
            <li>
              <Text>Terms & Conditions</Text>
            </li>
            <li>
              <Text>Privecy</Text>
            </li>
          </ServicesList>
        </Section>
        <Section>
          <Title>Get in Touch</Title>
          <Wrapper>
            <StyledLink to="mailto:info@cloudbudget.com">
              <Text>info@cloudbudget.com</Text>
            </StyledLink>
            <StyledLink to="tel:+1 844-721-7120">
              <Text>+1 844-721-7120</Text>
            </StyledLink>
          </Wrapper>
          <NetworkList>
            <li>
              <StyledLink to="https://www.facebook.com/">
                <img src={facebook} alt="facebook" width={12} />
              </StyledLink>
            </li>
            <li>
              <StyledLink to="https://www.linkedin.com">
                <img src={linkedin} alt="linkedin" width={20} />
              </StyledLink>
            </li>
            <li>
              <StyledLink to="https://twitter.com/?lang=en">
                <img src={twitter} alt="twitter" width={22} />
              </StyledLink>
            </li>
          </NetworkList>
        </Section>
        <Section>
          <Title>We Support</Title>
          <img src={support} alt="Support" width={216} />
        </Section>
      </Container>
    </FooterApp>
  );
};

export default Footer;
