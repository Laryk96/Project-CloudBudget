import { Button } from './BaseBtn.styled';

const BaseBtn = props => {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
};

export default BaseBtn;
