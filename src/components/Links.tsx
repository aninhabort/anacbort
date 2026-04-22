import { LinkText, Container } from "../styles/links";
import { dataProps } from "../data";
import { FaBook, FaBookOpen } from "react-icons/fa6";
import { IoWater } from "react-icons/io5";

const OtherLinks = ({
  taskDocumentationTemplate,
  weeklyPlannerTemplate,
  myBooksAmazon,
  kindleUnlimitedAmazon,
  skincareProductsAmazon,
}: dataProps) => {
  return (
    <Container>
      <LinkText
        href={taskDocumentationTemplate}
        target="_blank"
        rel="noreferrer noopener"
      >
        Task Documentation Template
        <FaBook size={20} />
      </LinkText>

      <LinkText
        href={weeklyPlannerTemplate}
        target="_blank"
        rel="noreferrer noopener"
      >
        Weekly Planner Template
        <FaBook size={20} />
      </LinkText>

      <LinkText href={myBooksAmazon} target="_blank" rel="noreferrer noopener">
        My Books
        <FaBookOpen size={20} />
      </LinkText>

      <LinkText
        href={kindleUnlimitedAmazon}
        target="_blank"
        rel="noreferrer noopener"
      >
        Books on Kindle Unlimited
        <FaBookOpen size={20} />
      </LinkText>

      <LinkText
        href={skincareProductsAmazon}
        target="_blank"
        rel="noreferrer noopener"
      >
        Skincare Products
        <IoWater size={20} />
      </LinkText>

      <a href="https://ko-fi.com/C0C658NHJ" target="_blank">
        <img
          height="36"
          style={{ border: "0px", height: "36px" }}
          src="https://storage.ko-fi.com/cdn/kofi1.png?v=6"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </Container>
  );
};

export default OtherLinks;
