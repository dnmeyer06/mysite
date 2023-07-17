import WorkPage from "@/components/WorkPageComponents/WorkPage";
import WorkAchievementBullet from "@/components/WorkPageComponents/WorkAchievementBullet";

const jobAccomplishments = [
  {
    key: 1,
    string:
      "Spearheaded the design, architecture, and implementation of a user-friendly, versatile system, enabling non-technical team members to seamlessly generate promotional memberships. This solution granted users complimentary memberships for promotional or partnership purposes, considerably enhancing our marketing and operations team's capacity to engage with external stakeholders and expand Innerworld's outreach.",
  },
  {
    key: 2,
    string:
      "Developed backend systems for a Virtual Reality mental health app, enhancing user experience through features like user data synchronization across systems, journal feature for VR image and world state preservation, and customized user experience based on suggested events and age.",
  },
  {
    key: 3,
    string:
      "Orchestrated a site redesign and implemented server-side rendering for better site previews on social media, significantly boosting the app's visibility and user engagement.",
  },
  {
    key: 4,
    string:
      "Implemented robust event search and filtering capabilities, along with intuitive admin interfaces for internal stakeholders, bolstering event creation, editing, and promotional memberships management.",
  },
  {
    key: 5,
    string:
      "Led the integration of Mixpanel tracking with UTM and our marketing channels, as well as Pipedrive integration for status tracking, enabling improved data-driven decision-making and marketing strategies.",
  },
  {
    key: 6,
    string:
      "Overhauled the payment and subscription tracking systems, implementing Stripe SKUs and integrations for token purchases, and developing a backend system to parse and record Stripe, Oculus, and iOS subscriptions, ensuring accurate tracking and elimination of duplicates.",
  },
  {
    key: 7,
    string:
      "Upgraded registration flow using a custom Typeform and transitioned the app to React functional components from class components, resulting in a smoother, more streamlined user onboarding experience.",
  },
  {
    key: 8,
    string:
      "Leveraged TypeScript and Jest for unit testing, establishing a solid foundation for quality assurance and the timely identification and resolution of potential issues.",
  },
].map(({ key, string }) => (
  <WorkAchievementBullet key={key}>{string}</WorkAchievementBullet>
));

export default function Innerworld() {
  return (
    <WorkPage
      url="https://www.inner.world/app/"
      companyName="Innerworld"
      jobAccomplishments={jobAccomplishments}
      startDate={new Date("October 2022")}
      endDate={new Date("June 2023")}
      toolsUsed={[
        "React",
        "TypeScript",
        "Meteor",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Mixpanel",
        "Pipedrive",
        "Jest",
        "Azure",
      ]}
      summary="Innerworld is a groundbreaking mental health platform that leverages Virtual Reality to provide users with a safe, immersive environment to explore their inner world and develop mindfulness. I was brought on as a full-stack engineer to help develop the backend systems and expanding the front end web experience."
    />
  );
}
