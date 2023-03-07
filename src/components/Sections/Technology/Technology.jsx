import { Container } from 'MainLayout/MainLayout.styled';
import cloud from 'images/ant-design_cloud-download-outline.svg';
import pdf from 'images/Group.svg';
import csv from 'images/iwwa-file-csv.svg';
import secure from 'images/Vector.svg';

import {
  Icon,
  Label,
  SectionTechnology,
  SubTitle,
  TechnologyItem,
  TechnologyList,
  Text,
  Title,
  Wrapper,
} from './Technology.styled';

const Technology = () => {
  return (
    <SectionTechnology>
      <Container style={{ flexDirection: 'column' }}>
        <Title>Technology</Title>
        <TechnologyList>
          <TechnologyItem>
            <Wrapper>
              <Label>01</Label>
              <Icon
                src={cloud}
                alt="Cloud"
                style={{ transform: 'translate(-15px,-10px)' }}
              />
            </Wrapper>
            <SubTitle>Cloud Storage</SubTitle>
            <Text>
              Access your account from anywhere in the world on any device
            </Text>
          </TechnologyItem>
          <TechnologyItem>
            <Wrapper>
              <Label>02</Label>
              <Icon src={secure} alt="Secure" />
            </Wrapper>
            <SubTitle>Secure</SubTitle>
            <Text>All your information is stored on secure cloud servers</Text>
          </TechnologyItem>
          <TechnologyItem>
            <Wrapper>
              <Label>03</Label>
              <Icon src={pdf} alt="PDF" />
            </Wrapper>
            <SubTitle>PDF Download</SubTitle>
            <Text>Download any of your reports in PDF format</Text>
          </TechnologyItem>
          <TechnologyItem>
            <Wrapper>
              <Label>04</Label>
              <Icon src={csv} alt="CSV" />
            </Wrapper>
            <SubTitle>CSV Download</SubTitle>
            <Text>All your information is stored on secure cloud servers</Text>
          </TechnologyItem>
        </TechnologyList>
      </Container>
    </SectionTechnology>
  );
};

export default Technology;
