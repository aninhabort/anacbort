import Header from "./components/Header";
import Links from "./components/Links";
import MyLinks from "./components/MyLinks";

import { Container, MainContainer } from "./style";

function App() {
  return (
    <MainContainer>
      <Header />

      <Container>
        <MyLinks />
        <Links />        
      </Container>
    </MainContainer>
  );
}

export default App;
