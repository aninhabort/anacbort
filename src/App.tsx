import Header from "./components/Header";
import Links from "./components/Links";
import img from './assets/background.jpg';
import { Analytics } from "@vercel/analytics/react"

import { Container, HeaderImg, MainContainer } from "./style";

function App() {
  return (
    <>
      <HeaderImg src={img} alt="Books in a library" />
      
      <MainContainer>
        <Header />

        <Container>
          <Links />
        </Container>
      </MainContainer>
      <Analytics />
    </>
  );
}

export default App;
