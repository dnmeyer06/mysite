import WorkPage from "@/components/WorkPage";

export default function ProdPerfect() {
  return (
    <WorkPage
      url="https://prodperfect.com/"
      companyName="ProdPerfect"
      jobAccomplishments={
        <>
          <li>
            - Designed and implemented a sophisticated user interface,
            leveraging technologies such as React, Node.js, and AWS Lambdas and
            Serverless cloud functions. This interface offered clients a
            comprehensive overview of their respective regression test suites,
            runs, and coverage. The enhancement in visibility and comprehension
            translated into a significant 30% uplift in user Net Promoter Score
            (NPS).
          </li>
          <br />
          <li>
            - Developed a proprietary internal tool, utilizing AWS, Serverless,
            TestCafe, and Terraform. This resource empowered engineering teams
            with unprecedented control over and insights into customer test
            performance and precision. The outcome was a remarkable reduction in
            engineering overhead and cost of external services by 20%.
          </li>
          <br />
          <li>
            - Engaged in qualitative user research through interviews,
            systematically collating and converting findings into tangible UX/UI
            enhancements for customer-facing applications. This also informed
            prioritization and task allocation within the development team,
            ensuring user-centric development focus.
          </li>
        </>
      }
      startDate={new Date("November, 2019")}
      endDate={new Date("August, 2022")}
    />
  );
}
