import WorkPage from "@/components/WorkPageComponents/WorkPage";
import WorkAchievementBullet from "@/components/WorkPageComponents/WorkAchievementBullet";

const jobAccomplishments = [
  {
    key: 1,
    string:
      "Designed and implemented a sophisticated user interface, leveraging technologies such as React, Node.js, and AWS Lambdas and Serverless cloud functions. This interface offered clients a comprehensive overview of their respective regression test suites, runs, and coverage. The enhancement in visibility and comprehension translated into a significant 30% uplift in user Net Promoter Score (NPS)",
  },
  {
    key: 2,
    string:
      "Developed a proprietary internal tool, utilizing AWS, Serverless, TestCafe, and Terraform. This resource empowered engineering teams with unprecedented control over and insights into customer test performance and precision. The outcome was a remarkable reduction in engineering overhead and cost of external services by 20%.",
  },
  {
    key: 3,
    string:
      "Engaged in qualitative user research through interviews, systematically collating and converting findings into tangible UX/UI enhancements for customer-facing applications. This also informed prioritization and task allocation within the development team, ensuring user-centric development focus.",
  },
].map(({ key, string }) => (
  <WorkAchievementBullet key={key}>{string}</WorkAchievementBullet>
));

export default function ProdPerfect() {
  return (
    <WorkPage
      url="https://prodperfect.com/"
      companyName="ProdPerfect"
      jobAccomplishments={jobAccomplishments}
      startDate={new Date("November, 2019")}
      endDate={new Date("August, 2022")}
      toolsUsed={[
        "React",
        "Redux",
        "Node.js",
        "AWS",
        "Serverless",
        "Terraform",
        "TestCafe",
      ]}
      summary="ProdPerfect is a venture-backed startup that leverages machine learning to automate the creation and maintenance of end-to-end regression test suites for web applications. I was brought on originally as a delivery engineer, working hands on with an overseas team to ensure that our clients' test suites were up to date and accurate. I was then promoted to a full-stack engineer, where I worked on a variety of projects, including a customer-facing dashboard, an internal tool for managing test suites, and a proprietary test runner."
    />
  );
}
