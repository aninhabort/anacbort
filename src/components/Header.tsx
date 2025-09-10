import { Avatar, Container, Name, SubName } from "../styles/header";
import avatar from '../assets/avatar.jpeg';
import MyLinks from "../components/MyLinks";
import { dataProps } from "../App";

const Header = ({ socials }: dataProps) => {
  return (
    <Container>
      <Avatar src={avatar} alt="Girl with a book" />
      <Name>Ana Carolina Magalhães</Name>
      <SubName>Dev & Content Creator</SubName>
      <MyLinks {...socials} />
    </Container>
  );
};

export default Header;
