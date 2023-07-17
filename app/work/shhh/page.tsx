import WorkPage from "@/components/WorkPageComponents/WorkPage";
import WorkAchievementBullet from "@/components/WorkPageComponents/WorkAchievementBullet";

const jobAccomplishments = [
  {
    key: 1,
    string:
      "Working with an early stage AI LLM project that is aiming to revolutionize how users relay their oral histories.",
  },
  {
    key: 2,
    string:
      "Designing user interfaces and UX interactions with Figma and implementing them with Next.js and Firebase.",
  },
  {
    key: 3,
    string:
      "Working with team in very early stages to guide development and determine the path of the product and user journey.",
  },
].map(({ key, string }) => (
  <WorkAchievementBullet key={key}>{string}</WorkAchievementBullet>
));

export default function Shhh() {
  return (
    <WorkPage
      companyName="Early Stage AI LLM Project (Stealth Mode)"
      jobAccomplishments={jobAccomplishments}
      toolsUsed={["TypeScript", "Next.js", "Material UI", "Firebase", "Figma"]}
      startDate={new Date("June 2023")}
      summary="An old coworker reached out to me because they were in need of a frontend developer to build a user facing interface and identify for a new project they were working on. I was brought on as a contractor to help build out the frontend and design the user experience."
    />
  );
}
