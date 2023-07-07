import ExternalLink from "@/components/ExternalLink";

export default function Work() {
  return (
    <>
      <p>Under construction. Something fancy coming soon.</p>
      <br />
      <p>
        Until then, to see my employment history along with details of my work,
        you can check out my{" "}
        <ExternalLink href="https://www.linkedin.com/in/dnmeyer06/">
          <strong className="underline">Linkedin Page</strong>
        </ExternalLink>
      </p>
      {/* <div className="flex justify-between">
        <HeaderText2 inline>Staff Positions</HeaderText2>
        <HeaderText2 inline>Freelance Work</HeaderText2>
      </div> */}
    </>
  );
}
