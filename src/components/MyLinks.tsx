import { Container } from "../styles/myLinks";
import { PiInstagramLogo, PiThreadsLogo, PiTiktokLogo } from "react-icons/pi";

const SocialLinks = () => {
  return (
    <Container>
      <a href="https://www.tiktok.com/@anacbort_">
        <PiTiktokLogo size={30} className="social-icons" />
      </a>
      <a href="https://www.instagram.com/anacbort_/">
        <PiInstagramLogo size={30} className="social-icons" />
      </a>
      <a href="https://www.threads.net/@anacbort_">
        <PiThreadsLogo size={30} className="social-icons" />
      </a>
    </Container>
  );
};

export default SocialLinks;
