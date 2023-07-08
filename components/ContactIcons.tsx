// Icon imports
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

// Component imports
import ExternalLink from "../components/ExternalLink";

const ContactIcons = () => (
  <div className="flex gap-4 pb-4">
    <ExternalLink href="https://www.linkedin.com/in/dnmeyer06/">
      <AiOutlineLinkedin className="text-3xl lg:text-5xl" />
    </ExternalLink>
    <ExternalLink href="https://github.com/dnmeyer06">
      <FiGithub className="text-3xl lg:text-5xl" />
    </ExternalLink>
  </div>
);

export default ContactIcons;
