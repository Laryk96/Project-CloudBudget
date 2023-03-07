import { Container } from 'MainLayout/MainLayout.styled';
import AccentVideo from 'images/AccentVideo_bg.jpg';
import videoLeft from 'images/Video_bgLeft.jpg';
import videoRight from 'images/Video_bgRight.jpg';
import appstore from 'images/ion-logo-apple-appstore.svg';
import playstore from 'images/ion-logo-google-playstore.svg';
import windows from 'images/simple-icons_windows.svg';
import { Link } from 'react-router-dom';
import {
  Images,
  LeftBox,
  LinkList,
  RightBox,
  SectionsAccent,
  Text,
  Title,
} from './Accent.styled';

const Accent = () => {
  return (
    <SectionsAccent>
      <Container style={{ gap: '125px' }}>
        <LeftBox>
          <Title>Stay focused on saving money</Title>
          <Text>
            It is important to stay focused on saving money in any way you can.
            We help you monitor your spending habits so you can easily spot and
            cut any unnecessary expenses. Simply join today to get started!
          </Text>

          <LinkList>
            <li>
              <Link to="">
                <img src={playstore} alt="playstore" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={appstore} alt="appstore" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={windows} alt="windows" />
              </Link>
            </li>
          </LinkList>
        </LeftBox>
        <RightBox>
          <Images
            src={videoLeft}
            alt="video preview"
            style={{ height: '267px' }}
          />
          <Images
            src={AccentVideo}
            alt="video preview"
            style={{ position: 'absolute', top: '-20px' }}
          />
          <Images src={videoRight} alt="video preview" />
        </RightBox>
      </Container>
    </SectionsAccent>
  );
};

export default Accent;
