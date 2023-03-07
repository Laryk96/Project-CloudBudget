import styled from '@emotion/styled';

const SectionContact = styled.section`
  padding-bottom: 94px;
  padding-top: 117px;
`;
const Title = styled.h2`
  margin-bottom: 52px;

  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: #000000;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.4;

  text-align: justify;

  color: #000000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const LeftBox = styled.div`
  width: 445px;
`;
const RightBox = styled.div`
  width: 540px;
`;
const InputWrapper = styled.div`
  display: flex;
  gap: 61px;
`;
const Input = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 31px;

  border: 1px solid #333333;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1.2;
  outline: none;
  color: rgba(19, 39, 67, 0.5);

  &:hover,
  &:focus {
    border-color: #ed4c5c;
  }
`;

export {
  SectionContact,
  Title,
  Text,
  Form,
  LeftBox,
  RightBox,
  InputWrapper,
  Input,
};
