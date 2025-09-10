import { FaInstagram, FaThreads, FaTiktok, FaTwitter, FaGoodreads } from "react-icons/fa6";
import { Container } from "../styles/myLinks";
import { socialsProps } from "../App";

const SocialLinks = ({ tiktok, instagram, threads, x, goodreads }: socialsProps) => {
  return (
    <Container>
      <a href={tiktok} aria-label="My Tiktok">
        <FaTiktok size={24} className="social-icons" />
      </a>
      <a href={instagram} aria-label="My Instagram">
        <FaInstagram size={24} className="social-icons" />
      </a>
      <a href={threads} aria-label="My Threads">
        <FaThreads size={24} className="social-icons" />
      </a>
      <a href={x} aria-label="My X">
        <FaTwitter size={24} className="social-icons" />
      </a>
      <a href={goodreads} aria-label="My Goodreads">
        <FaGoodreads size={24} className="social-icons" />
      </a>
    </Container>
  );
};

export default SocialLinks;
