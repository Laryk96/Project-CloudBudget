import styled from '@emotion/styled';

const SectionTechnology = styled.section`
  padding-top: 64px;
  padding-bottom: 104px;
`;

const Title = styled.h2`
  margin-bottom: 52px;

  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  text-align: center;
  color: #000000;
`;

const TechnologyList = styled.ul`
  display: flex;
  gap: 30px;
`;

const TechnologyItem = styled.li`
  text-align: center;
  max-width: 255px;
`;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 51px;
`;

const Icon = styled.img`
  position: absolute;
  top: 60%;
  left: 40%;
`;

const Label = styled.span`
  font-weight: 700;
  font-size: 100px;
  line-height: 1.2;

  color: rgba(16, 16, 16, 0.08);
`;

const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: #101010;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: #000000;
`;
export {
  SectionTechnology,
  Title,
  TechnologyList,
  TechnologyItem,
  Wrapper,
  Label,
  SubTitle,
  Text,
  Icon,
};
