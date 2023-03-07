import BaseBtn from 'components/Buttons/BaseBtn';
import { SectionMain, Text, Title } from './Main.styled';

const Main = () => {
  return (
    <SectionMain>
      <Title>CloudBudget</Title>
      <Text>
        Cloud budget management for everyone. Only €69.95 a Month After a 7 Day
        Trial of Up to €4.99
      </Text>
      <BaseBtn>Sign Up</BaseBtn>
    </SectionMain>
  );
};

export default Main;
