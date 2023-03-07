import styled from '@emotion/styled';
import main from 'images/main.png';

const SectionMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 782px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  background-image: linear-gradient(
      90deg,
      rgba(213, 32, 71, 0.8) 0%,
      rgba(238, 61, 27, 0.8) 100%
    ),
    url(${main});
`;

const Title = styled.h1`
  margin-bottom: 40px;

  font-weight: 700;
  font-size: 72px;
  line-height: 1.2;
  color: #ffffff;

  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin-bottom: 40px;

  max-width: 540px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;

  text-align: center;
  color: #ffffff;
`;

export { SectionMain, Title, Text };
