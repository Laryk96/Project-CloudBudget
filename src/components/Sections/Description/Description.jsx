import { Container } from 'MainLayout/MainLayout.styled';
import video from 'images/Video_bg.jpg';
import {
  BoxDescription,
  BoxVideo,
  SectionsDescription,
  Text,
  Title,
} from './Description.styled';
const Description = () => {
  return (
    <SectionsDescription>
      <Container>
        <BoxDescription>
          <Title>Easy to Use Cloud Budget Management Software</Title>
          <Text>
            Our software is made so you can access and manage your budget and
            expenses online at any time from any device. It provides detailed
            income and expense reports with graphs so you can easilly see your
            spending patterns and budget at a glance. Read below to find out
            more.
          </Text>
        </BoxDescription>
        <BoxVideo>
          <img src={video} alt="video" width={445} />
        </BoxVideo>
      </Container>
    </SectionsDescription>
  );
};

export default Description;
