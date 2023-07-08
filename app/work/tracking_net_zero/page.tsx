import { HeaderText2 } from "@/components/Header";
import { AiOutlineLink } from "react-icons/ai";
import Work from "../page";
import WorkPage from "@/components/WorkPage";

export default function TrackingNetZero() {
  return (
    <WorkPage
      url="https://trackingnetzero.com/"
      companyName="Tracking Net Zero"
      jobAccomplishments={
        <>
          <li>
            - Developed from scratch a platform to enable local governments to
            monitor and evaluate their progress toward net-zero energy
            efficiency. The platform was built using TypeScript, Auth0, HubSpot,
            Netlify, and Leaflet.
          </li>
          <br />
          <li>
            - Designed a data pipeline that converted survey data collected
            through HubSpot into understandable charts and a Leaflet map. This
            allowed towns to visually track and comprehend the effect of their
            energy conservation initiatives.
          </li>
          <br />
          <li>
            - Implemented a DevOps infrastructure to ensure smooth deployment
            via Netlify and maintain code quality and consistency through the
            use of ESLint and Prettier. This approach maintained the codebase
            and optimized the delivery pipeline, reducing potential downtime and
            improving the user experience.
          </li>
        </>
      }
    />
  );
}
