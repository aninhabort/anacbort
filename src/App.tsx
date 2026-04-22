import Header from "./components/Header";
import Links from "./components/Links";
import img from "./assets/background.jpg";
import { Analytics } from "@vercel/analytics/react";
import { Container, HeaderImg, MainContainer } from "./style";
import { FaHeart } from "react-icons/fa6";
import data from "./data";

function App() {
  return (
    <main>
      <HeaderImg src={img} alt="Books in a library" />

      <MainContainer>
        <Header {...data} />

        <Container>
          <Links {...data} />
        </Container>
      </MainContainer>
      <Analytics />

      <p>Made by me with <FaHeart /></p>
    </main>
  );
}

export default App;
