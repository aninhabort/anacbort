import { FaInstagram, FaThreads, FaTiktok } from "react-icons/fa6";
import { Container } from "../styles/myLinks";

const SocialLinks = () => {
  return (
    <Container>
      <a href="https://www.tiktok.com/@anacbort_">
        <FaTiktok size={29} className="social-icons" />
      </a>
      <a href="https://www.instagram.com/anacbort_/">
        <FaInstagram size={30} className="social-icons" />
      </a>
      <a href="https://www.threads.net/@anacbort_">
        <FaThreads size={30} className="social-icons" />
      </a>
    </Container>
  );
};

export default SocialLinks;
