import Header from "./components/Header";
import Links from "./components/Links";
import img from './assets/background.jpg';

import { Container, HeaderImg, MainContainer } from "./style";

function App() {
  return (
    <>
      <HeaderImg src={img} />
      
      <MainContainer>
        <Header />

        <Container>
          <Links />
        </Container>
      </MainContainer>
    </>
  );
}

export default App;
