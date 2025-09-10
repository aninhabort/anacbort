import Header from "./components/Header";
import Links from "./components/Links";
import img from "./assets/background.jpg";
import { Analytics } from "@vercel/analytics/react";

import { Container, HeaderImg, MainContainer } from "./style";
import { FaHeart } from "react-icons/fa6";
export interface socialsProps {
  tiktok?: string;
  instagram?: string;
  threads?: string;
  x?: string;
  goodreads?: string;
}
export interface dataProps {
  socials: socialsProps;
  taskDocumentationTemplate: string;
  weeklyPlannerTemplate: string;
  caffeineArmy: string;
  myBooksAmazon: string;
  skincareProductsAmazon: string;
  kofi: string;
}

const data: dataProps = {
  socials: {
    tiktok: "https://www.tiktok.com/@anacbort_" ,
    instagram: "https://www.instagram.com/anacbort_/",
    threads: "https://www.threads.net/@anacbort_",
    x: "https://x.com/anacbort_",
    goodreads: "https://www.goodreads.com/anacbort_",
  },
  taskDocumentationTemplate: "https://www.notion.com/templates/task-documentation",
  weeklyPlannerTemplate: "https://www.notion.com/templates/your-weekly-planner",
  caffeineArmy: "https://www.caffeinearmy.com.br/?ref=206ohprl2o",
  myBooksAmazon: "https://amzn.to/4fZ8HoF",
  skincareProductsAmazon: "https://amzn.to/499allp",
  kofi: "https://ko-fi.com/anacbort",
};

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
