import { LinkText, Container, Link } from "../styles/links";

const OtherLinks = () => {
  return (
    <Container>
      <Link
        href="https://www.caffeinearmy.com.br/?ref=206ohprl2o"
        target="_blank"
      >
        <LinkText>Caffeine Army</LinkText>
      </Link>
      <Link
        href="https://drinkkoala.com.br?bon_loyalty_ref=znhux1uOHquCBnHJLS4lDJLuMdcAUQrJdrThVRGyF79z5mrADAN15W9DQt85TKDw9ondBHRBRGYME5BhHB6Bh8T7NsCTFF4c1tf10PwgnDJDogEdKlbH0Co0OMTCyJduf%2F5AEqwsdl1kK8k6Nld%2FU%2BkadfNbL4pqChNT9IK5Gwc%3D&from_shop_domain=true&referrer_name=416e61204361726f6c696e616873"
        target="_blank"
      >
        <LinkText>Koala Sleep</LinkText>
      </Link>
      <Link href="https://www.notion.so/@anacbort_" target="_blank">
        <LinkText>My Notion Creator Page</LinkText>
      </Link>
      <Link href="https://www.amazon.com.br/shop/aninha.dev" target="_blank">
        <LinkText>My Amazon Page</LinkText>
      </Link>
      <Link
        href="https://www.goodreads.com/user/show/178604941"
        target="_blank"
      >
        <LinkText>My GoodReads profile</LinkText>
      </Link>
      <Link href="https://ko-fi.com/anacbort" target="_blank">
        <LinkText>Support me on Ko-fi</LinkText>
      </Link>
    </Container>
  );
};

export default OtherLinks;
