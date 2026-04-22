import { LinkText, Container } from "../styles/links";
import { dataProps } from "../data";
import { FaBook, FaBookOpen, FaHeart } from "react-icons/fa6";
import { IoWater } from "react-icons/io5";

const OtherLinks = ({
  taskDocumentationTemplate,
  weeklyPlannerTemplate,
  myBooksAmazon,
  kindleUnlimitedAmazon,
  skincareProductsAmazon,
  kofi,
}: dataProps) => {
  return (
    <Container>
      <LinkText href={taskDocumentationTemplate} target="_blank" rel="noreferrer noopener">
        Task Documentation Template
        <FaBook size={20} />
      </LinkText>

      <LinkText href={weeklyPlannerTemplate} target="_blank" rel="noreferrer noopener">
        Weekly Planner Template
        <FaBook size={20} />
      </LinkText>

      <LinkText href={myBooksAmazon} target="_blank" rel="noreferrer noopener">
        My Books
        <FaBookOpen size={20} />
      </LinkText>

      <LinkText href={kindleUnlimitedAmazon} target="_blank" rel="noreferrer noopener">
        Books on Kindle Unlimited
        <FaBookOpen size={20} />
      </LinkText>

      <LinkText href={skincareProductsAmazon} target="_blank" rel="noreferrer noopener">
        Skincare Products
        <IoWater size={20} />
      </LinkText>

      <LinkText href={kofi} target="_blank" rel="noreferrer noopener">
        Support me on Ko-fi
        <FaHeart size={20} />
      </LinkText>
    </Container>
  );
};

export default OtherLinks;
