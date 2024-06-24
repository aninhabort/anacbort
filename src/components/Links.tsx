import { LinkText, Container, Link } from "../styles/links";

const OtherLinks = () => {
  return (
    <Container>
      <Link href="https://www.caffeinearmy.com.br/?ref=206ohprl2o" target="_blank">
        <LinkText>Caffeine Army</LinkText>
      </Link>

      <Link href="https://www.notion.so/@aninhadev" target="_blank">
        <LinkText>My Notion Creator Page</LinkText>
      </Link>

      <Link href="https://www.amazon.com.br/shop/aninha.dev" target="_blank">
        <LinkText>My Amazon Page</LinkText>
      </Link>

      <Link href="https://thenewscc.beehiiv.com/subscribe?ref=0DW029MOPO" target="_blank">
        <LinkText>The News | Jornal</LinkText>
      </Link>

      <Link href="https://ko-fi.com/aninhadev" target="_blank">
        <LinkText>By me a coffee</LinkText>
      </Link>
    </Container>
  );
};

export default OtherLinks;
