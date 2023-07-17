import WorkAchievementBullet from "@/components/WorkPageComponents/WorkAchievementBullet";
import WorkPage from "@/components/WorkPageComponents/WorkPage";

const jobAccomplishments = [
  {
    key: 1,
    string:
      "Built out a Firebase powered authentication system to allow users to access learning language tools.",
  },
  {
    key: 2,
    string:
      "Designed and implemented partner referral tracking with associated reporting for accounting team to process remuneration for qualifying referrals",
  },
  {
    key: 3,
    string:
      "Implemented data storage in Firestore for user info to allow the app to record a user&apos;s interactions and membership status.",
  },
  {
    key: 4,
    string:
      "Expanded the organizations Netlify infrastructure to allow for different deployments to different environments pointed at specific Firestore projects to allow for discreet Prod and Dev environments.",
  },
  {
    key: 5,
    string:
      "Participated in code reviews and enforced code quality standards to ensure a stable production.",
  },
].map(({ key, string }) => (
  <WorkAchievementBullet key={key}>{string}</WorkAchievementBullet>
));

export default function ProdPerfect() {
  return (
    <WorkPage
      url="https://refold.la/"
      companyName="Refold Languages"
      jobAccomplishments={jobAccomplishments}
      startDate={new Date("May, 2021")}
      endDate={new Date("February, 2022")}
      toolsUsed={[
        "React",
        "Firebase",
        "Gatsby",
        "Patreon",
        "Netlify",
        "Node.js",
        "Typescript",
        "Jest",
        "React Testing Library",
      ]}
      summary="Refold Languages is a language learning platform that leverages the power of community to help users learn a new language. I was brought on as a freelancer full-stack engineer to help develop the backend systems and expanding the front end web experience."
    />
  );
}
