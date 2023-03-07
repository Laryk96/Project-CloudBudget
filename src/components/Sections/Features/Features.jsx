import { Container } from 'MainLayout/MainLayout.styled';
import BgCenter from 'images/BgCenter.jpg';
import BgLeft from 'images/BgLeft.jpg';
import BgRight from 'images/BgRight.jpg';
import {
  Board,
  FeaturesItem,
  FeaturesList,
  SectionsFeatures,
  StyleLink,
  SubTitle,
  Text,
  Title,
} from './Features.styled';

const Features = () => {
  return (
    <SectionsFeatures>
      <Container style={{ flexDirection: 'column' }}>
        <Title>Features</Title>
        <FeaturesList>
          <FeaturesItem>
            <img src={BgLeft} alt="" width={350} />
            <Board>
              <SubTitle>Supports All Currencies and Cards</SubTitle>
              <Text>
                We support all popular currencies and is fully customizable to
                add
              </Text>
              <StyleLink to="/">Read More</StyleLink>
            </Board>
          </FeaturesItem>
          <FeaturesItem>
            <img src={BgCenter} alt="" width={350} />
            <Board>
              <SubTitle>Manage your expenses on the go</SubTitle>
              <Text>
                You can access your account from anywhere in the world on any
                device
              </Text>
              <StyleLink to="/">Read More</StyleLink>
            </Board>
          </FeaturesItem>
          <FeaturesItem>
            <img src={BgRight} alt="" width={350} />
            <Board>
              <SubTitle>Cloud Budget Management Software</SubTitle>
              <Text>
                Our software is made so you can access and manage your budget
              </Text>
              <StyleLink to="/">Read More</StyleLink>
            </Board>
          </FeaturesItem>
        </FeaturesList>
      </Container>
    </SectionsFeatures>
  );
};

export default Features;
