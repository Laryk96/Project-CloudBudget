import { Button } from 'components/Buttons/BaseBtn/BaseBtn.styled';
import { Container } from 'MainLayout/MainLayout.styled';
import {
  Form,
  Input,
  InputWrapper,
  LeftBox,
  RightBox,
  SectionContact,
  Text,
  Title,
} from './Contact.styled';

const Contact = () => {
  return (
    <SectionContact>
      <Container style={{ gap: '125px' }}>
        <LeftBox>
          <Title>Contact</Title>
          <Text>
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </LeftBox>
        <RightBox>
          <Form>
            <InputWrapper>
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
            </InputWrapper>
            <Input type="text" placeholder="Phone Number" />
            <Input type="text" placeholder="Select Service" />
            <Button
              style={{ backgroundColor: ' #ED4C5C', color: '#fff' }}
              type="submit"
            >
              Submit Now
            </Button>
          </Form>
        </RightBox>
      </Container>
    </SectionContact>
  );
};

export default Contact;
