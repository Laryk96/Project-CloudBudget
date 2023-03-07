import styled from '@emotion/styled';

const SectionsAccent = styled.section`
  padding-top: 94px;
  padding-bottom: 94px;
  background: #ed4c5c;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  color: #ffffff;
`;
const Text = styled.p`
  margin-bottom: 42px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  text-align: justify;
  color: #ffffff;
`;

const LeftBox = styled.div`
  max-width: 445px;
`;
const RightBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 570px;
`;

const LinkList = styled.ul`
  margin-left: -10px;
  display: flex;
  gap: 20px;
`;

const Images = styled.img`
  width: 445px;
  overflow: hidden;
  border-radius: 15px;
`;
export { SectionsAccent, LeftBox, RightBox, Text, Title, LinkList, Images };
