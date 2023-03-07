import styled from '@emotion/styled';

const ButtonLogIn = styled.button`
  width: 100px;
  height: 40px;

  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;

  transition: transform 200ms ease-in-out, border 200ms ease-in-out,
    background-color 200ms ease-in-out;
  &:hover,
  &:focus {
    background-color: #212121;
    border: none;
    transform: scale(1.1);
  }
`;

export { ButtonLogIn };
