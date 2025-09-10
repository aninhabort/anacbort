import { LinkText, Container } from "../styles/links";
import { dataProps } from "../App";
import { FaBook, FaHeart } from "react-icons/fa6";
import { FaCoffee, FaShoppingCart } from "react-icons/fa";

const OtherLinks = ({
  taskDocumentationTemplate,
  weeklyPlannerTemplate,
  caffeineArmy,
  myBooksAmazon,
  skincareProductsAmazon,
  kofi,
}: dataProps) => {
  return (
    <Container>
      <LinkText href={taskDocumentationTemplate} target="_blank">
        Task Documentation Template
        <FaBook size={20} />
      </LinkText>

      <LinkText href={weeklyPlannerTemplate} target="_blank">
        Weekly Planner Template
        <FaBook size={20} />
      </LinkText>

      <LinkText href={caffeineArmy} target="_blank">
        Caffeine Army
        <FaCoffee size={20} />
      </LinkText>

      <LinkText href={myBooksAmazon} target="_blank">
        My Books on Amazon
        <FaShoppingCart size={20} />
      </LinkText>

      <LinkText href={skincareProductsAmazon} target="_blank">
        Skincare Products on Amazon
        <FaShoppingCart size={20} />
      </LinkText>

      <LinkText href={kofi} target="_blank">
        Support me on Ko-fi
        <FaHeart size={20} />
      </LinkText>
    </Container>
  );
};

export default OtherLinks;
