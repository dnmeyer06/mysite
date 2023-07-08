// Icon Imports
import { GoPerson } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";

// Component Imports
import { HeaderText, HeaderText2 } from "../components/Header";
import UnderlineHoverLink from "../components/UnderlineHoverLink";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  return (
    <main className="flex flex-col">
      <PageHeader
        title={
          <>
            <p>
              My name is <strong>Dan</strong>
            </p>
            <br />
            <p>
              I make things for the <strong>web</strong>
            </p>
          </>
        }
      />

      <UnderlineHoverLink backgroundColor="bg-teal-400" link="/work">
        <HeaderText2 inline>See my professional experience</HeaderText2>{" "}
        <MdWorkOutline className="ml-2 inline" size="1.5em" />
      </UnderlineHoverLink>

      <UnderlineHoverLink backgroundColor="bg-amber-400" link="/about">
        <HeaderText2 inline>Learn more about me</HeaderText2>{" "}
        <GoPerson className="ml-2 inline" size="1.5em" />
      </UnderlineHoverLink>

      <div className="py-4">
        <HeaderText2>This site</HeaderText2>
        <p className="tracking-wide">
          This site is made with Typescript, Next.js and Tailwind
        </p>
      </div>
    </main>
  );
}
