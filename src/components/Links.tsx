import { LinkText, Container, Text } from "../styles/links";

const OtherLinks = ({
  notion,
  goodreads,
  caffeineArmy,
  koalaSleep,
  sublyme,
  myBooksAmazon,
  skincareProductsAmazon,
  kofi,
}: dataProps) => {
  return (
    <Container>
      <LinkText href={} target="_blank">
        Notion
      </LinkText>

      <LinkText href={} target="_blank">
        GoodReads
      </LinkText>

      <Text>Afiliate</Text>

      <LinkText href={} target="_blank">
        Caffeine Army
      </LinkText>

      <LinkText href={} target="_blank">
        Koala Sleep
      </LinkText>

      <LinkText href={} target="_blank">
        Sublyme
      </LinkText>

      <LinkText href={} target="_blank">
        My Books on Amazon
      </LinkText>

      <LinkText href={} target="_blank">
        Skincare Products on Amazon
      </LinkText>

      <LinkText href={} target="_blank">
        Support me on Ko-fi
      </LinkText>
    </Container>
  );
};

export default OtherLinks;
