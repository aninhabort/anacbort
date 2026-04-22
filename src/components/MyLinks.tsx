import { FaInstagram, FaThreads, FaTiktok, FaTwitter, FaGoodreads, FaP } from "react-icons/fa6";
import { Container } from "../styles/myLinks";
import { socialsProps } from "../data";

const SocialLinks = ({ tiktok, instagram, threads, x, goodreads, pagebound }: socialsProps) => {
  return (
    <Container>
      <a href={tiktok} aria-label="My Tiktok Profile">
        <FaTiktok size={24} className="social-icons" />
      </a>
      <a href={instagram} aria-label="My Instagram Profile">
        <FaInstagram size={24} className="social-icons" />
      </a>
      <a href={threads} aria-label="My Threads Profile">
        <FaThreads size={24} className="social-icons" />
      </a>
      <a href={x} aria-label="My X Profile">
        <FaTwitter size={24} className="social-icons" />
      </a>
      <a href={goodreads} aria-label="My Goodreads Profile">
        <FaGoodreads size={24} className="social-icons" />
      </a>
      <a href={pagebound} aria-label="My Pagebound Profile">
        <FaP size={24} className="social-icons" />
      </a>
    </Container>
  );
};

export default SocialLinks;
