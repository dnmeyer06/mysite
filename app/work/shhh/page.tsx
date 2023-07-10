import WorkPage from "@/components/WorkPage";

export default function Shhh() {
  return (
    <WorkPage
      companyName="Early Stage AI LLM Project (Stealth Mode)"
      jobAccomplishments={
        <>
          <li>
            - Working with an early stage AI LLM project that is aiming to
            revolutionize how users relay their oral histories.
          </li>
          <br />
          <li>
            - Designing user interfaces and UX interactions with Figma and
            implementing them with Next.js and Firebase.
          </li>
          <br />
          <li>
            - Working with team in very early stages to guide development and
            determine the path of the product and user journey.
          </li>
        </>
      }
      toolsUsed={["TypeScript", "Next.js", "Material UI", "Firebase", "Figma"]}
      startDate={new Date("June 2023")}
    />
  );
}
