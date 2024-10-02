import { Avatar, Container, Name } from "../styles/header";
import avatar from '../assets/avatar.jpeg';
import MyLinks from "../components/MyLinks";

const Header = () => {
  return (
    <Container>
      <Avatar src={avatar} alt="avatar" />
      <Name>@anacbort_</Name>
      <MyLinks />
    </Container>
  );
};

export default Header;
