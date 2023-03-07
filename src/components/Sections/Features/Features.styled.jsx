import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyleLink = styled(Link)`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;

  color: #ed4c5c;
`;

const SectionsFeatures = styled.section`
  padding-top: 63px;
  min-height: 660px;
  background: #fafafa;
`;

const Title = styled.h2`
  margin-bottom: 63px;

  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  text-align: center;

  color: #000000;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;

  color: #101010;
`;

const Text = styled.p`
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #101010;
`;
const FeaturesList = styled.ul`
  display: flex;
  gap: 30px;
`;

const FeaturesItem = styled.li`
  position: relative;
  max-width: 350px;
`;

const Board = styled.div`
  position: absolute;
  top: 60%;
  left: 29px;
  width: 293px;
  height: 198px;
  padding: 33px 32px 25px 32px;

  text-align: center;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`;

export {
  Title,
  FeaturesList,
  FeaturesItem,
  Board,
  SectionsFeatures,
  SubTitle,
  Text,
  StyleLink,
};
