import Header from "./components/Header";
import Links from "./components/Links";
import img from "./assets/background.jpg";
import { Analytics } from "@vercel/analytics/react";

import { Container, HeaderImg, MainContainer } from "./style";

export interface dataProps {
  notion: string,
  goodreads: string,
  caffeineArmy: string,
  koalaSleep: string,
  sublyme: string,
  myBooksAmazon: string,
  skincareProductsAmazon: string,
  kofi: string,
};

const data: dataProps = {
  notion: "https://www.notion.so/@anacbort_",
  goodreads: "https://www.goodreads.com/anacbort",
  caffeineArmy: "https://www.caffeinearmy.com.br/?ref=206ohprl2o",
  koalaSleep:
    "https://drinkkoala.com.br?bon_loyalty_ref=znhux1uOHquCBnHJLS4lDJLuMdcAUQrJdrThVRGyF79z5mrADAN15W9DQt85TKDw9ondBHRBRGYME5BhHB6Bh8T7NsCTFF4c1tf10PwgnDJDogEdKlbH0Co0OMTCyJduf%2F5AEqwsdl1kK8k6Nld%2FU%2BkadfNbL4pqChNT9IK5Gwc%3D&from_shop_domain=true&referrer_name=416e61204361726f6c696e616873",
  sublyme:
    "https://www.sublyme.com.br?bon_loyalty_ref=KmRQ3ZdP7LCsYMm0pweK3VOaN7WdNrWzsXvuUTxPR%2BKkJP08x8ewjvTqL4u%2BlCAKg5JEfkyue83Ro5%2FljsDVWDzzBJFLcfPs4xAQYsb6k4qJjTsraX8v3aoq5163aRKNG1LbRkIOulTgxVJe4pFjgswpzcVdRz9ybh1YVlcprIc%3D&from_shop_domain=true&referrer_name=416e61204361726f6c696e615162",
  mybooksAmazon: "https://amzn.to/4fZ8HoF",
  skincareproductsAmazon: "https://amzn.to/499allp",
  kofi: "https://ko-fi.com/anacbort",
};

function App() {
  return (
    <main>
      <HeaderImg src={img} alt="Books in a library" />

      <MainContainer>
        <Header />

        <Container>
          <Links data={data} />
        </Container>
      </MainContainer>
      <Analytics />
    </main>
  );
}

export default App;
