import Header from "./components/Header";
import Links from "./components/Links";

import { Container, HeaderImg, MainContainer } from "./style";

function App() {
  return (
    <>
      <HeaderImg src="src/assets/background.jpg" />
      
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
