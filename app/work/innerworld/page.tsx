import WorkPage from "@/components/WorkPage";

export default function Innerworld() {
  return (
    <WorkPage
      url="https://www.inner.world/app/"
      companyName="Innerworld"
      jobAccomplishments={
        <>
          <li>
            - Spearheaded the design, architecture, and implementation of a
            user-friendly, versatile system, enabling non-technical team members
            to seamlessly generate promotional memberships. This solution
            granted users complimentary memberships for promotional or
            partnership purposes, considerably enhancing our marketing and
            operations team&apos;s capacity to engage with external stakeholders
            and expand Innerworld&apos;s outreach.
          </li>
          <br />
          <li>
            - Developed backend systems for a Virtual Reality mental health app,
            enhancing user experience through features like user data
            synchronization across systems, journal feature for VR image and
            world state preservation, and customized user experience based on
            suggested events and age.
          </li>
          <br />
          <li>
            - Orchestrated a site redesign and implemented server-side rendering
            for better site previews on social media, significantly boosting the
            app&apos;s visibility and user engagement. - Implemented robust
            event search and filtering capabilities, along with intuitive admin
            interfaces for internal stakeholders, bolstering event creation,
            editing, and promotional memberships management.
          </li>
          <br />
          <li>
            - Led the integration of Mixpanel tracking with UTM and our
            marketing channels, as well as Pipedrive integration for status
            tracking, enabling improved data-driven decision-making and
            marketing strategies.
          </li>
          <br />
          <li>
            - Overhauled the payment and subscription tracking systems,
            implementing Stripe SKUs and integrations for token purchases, and
            developing a backend system to parse and record Stripe, Oculus, and
            iOS subscriptions, ensuring accurate tracking and elimination of
            duplicates.
          </li>
          <br />
          <li>
            - Upgraded registration flow using a custom Typeform and
            transitioned the app to React functional components from class
            components, resulting in a smoother, more streamlined user
            onboarding experience.
          </li>
          <br />
          <li>
            - Leveraged TypeScript and Jest for unit testing, establishing a
            solid foundation for quality assurance and the timely identification
            and resolution of potential issues.
          </li>
        </>
      }
    />
    // <>
    //   <a href="https://www.inner.world/app/" target="_blank" rel="noreferrer">
    //     <HeaderText2 inline>Innerworld</HeaderText2>{" "}
    //     <AiOutlineLink className="inline" />
    //   </a>

    //   <br />
    //   <br />
    //   <ul>
    //     <li>
    //       - Spearheaded the design, architecture, and implementation of a
    //       user-friendly, versatile system, enabling non-technical team members
    //       to seamlessly generate promotional memberships. This solution granted
    //       users complimentary memberships for promotional or partnership
    //       purposes, considerably enhancing our marketing and operations
    //       team&apos;s capacity to engage with external stakeholders and expand
    //       Innerworld&apos;s outreach.
    //     </li>
    //     <br />
    //     <li>
    //       - Developed backend systems for a Virtual Reality mental health app,
    //       enhancing user experience through features like user data
    //       synchronization across systems, journal feature for VR image and world
    //       state preservation, and customized user experience based on suggested
    //       events and age.
    //     </li>
    //     <br />
    //     <li>
    //       - Orchestrated a site redesign and implemented server-side rendering
    //       for better site previews on social media, significantly boosting the
    //       app&apos;s visibility and user engagement. - Implemented robust event
    //       search and filtering capabilities, along with intuitive admin
    //       interfaces for internal stakeholders, bolstering event creation,
    //       editing, and promotional memberships management.
    //     </li>
    //     <br />
    //     <li>
    //       - Led the integration of Mixpanel tracking with UTM and our marketing
    //       channels, as well as Pipedrive integration for status tracking,
    //       enabling improved data-driven decision-making and marketing
    //       strategies.
    //     </li>
    //     <br />
    //     <li>
    //       - Overhauled the payment and subscription tracking systems,
    //       implementing Stripe SKUs and integrations for token purchases, and
    //       developing a backend system to parse and record Stripe, Oculus, and
    //       iOS subscriptions, ensuring accurate tracking and elimination of
    //       duplicates.
    //     </li>
    //     <br />
    //     <li>
    //       - Upgraded registration flow using a custom Typeform and transitioned
    //       the app to React functional components from class components,
    //       resulting in a smoother, more streamlined user onboarding experience.
    //     </li>
    //     <br />
    //     <li>
    //       - Leveraged TypeScript and Jest for unit testing, establishing a solid
    //       foundation for quality assurance and the timely identification and
    //       resolution of potential issues.
    //     </li>
    //   </ul>
    // </>
  );
}
