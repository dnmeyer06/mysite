import WorkPage from "@/components/WorkPageComponents/WorkPage";
import WorkAchievementBullet from "@/components/WorkPageComponents/WorkAchievementBullet";

const jobAccomplishments = [
  {
    key: 1,
    string:
      "Developed from scratch a platform to enable local governments to monitor and evaluate their progress toward net-zero energy efficiency. The platform was built using TypeScript, Auth0, HubSpot, Netlify, and Leaflet.",
  },
  {
    key: 2,
    string:
      "Designed a data pipeline that converted survey data collected through HubSpot into understandable charts and a Leaflet map. This allowed towns to visually track and comprehend the effect of their energy conservation initiatives.",
  },
  {
    key: 3,
    string:
      "Implemented a DevOps infrastructure to ensure smooth deployment via Netlify and maintain code quality and consistency through the use of ESLint and Prettier. This approach maintained the codebase and optimized the delivery pipeline, reducing potential downtime and improving the user experience.",
  },
].map(({ key, string }) => (
  <WorkAchievementBullet key={key}>{string}</WorkAchievementBullet>
));

export default function TrackingNetZero() {
  return (
    <WorkPage
      url="https://trackingnetzero.com/"
      companyName="Tracking Net Zero"
      jobAccomplishments={jobAccomplishments}
      startDate={new Date("October 2022")}
      toolsUsed={[
        "TypeScript",
        "React",
        "Auth0",
        "HubSpot",
        "Netlify",
        "Leaflet",
      ]}
      summary="I was connected to a colleague from my days working for a contractor focusing on making homes more energy efficient. The goal is to empower local and municipal governments to get a clear view of where their town stands in terms of the energy efficiency of domestic units, and thus what steps they can take to improve and track their course towards net zero. I was the sole engineer on the project and was responsible for the entire stack, from the frontend to the backend. I was also responsible for the design of the user experience and the user interface."
    />
  );
}
