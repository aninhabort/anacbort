import { Avatar, Container, Name } from "../styles/header";
import avatar from '../assets/avatar.jpeg';

const Header = () => {
  return (
    <Container>
      <Avatar src={avatar} alt="avatar" />
      <Name>@anacbort_</Name>
    </Container>
  );
};

export default Header;
