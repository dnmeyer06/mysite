import { ReactNode } from "react";
import { HeaderText2 } from "@/components/Header";
import { AiOutlineLink } from "react-icons/ai";

const WorkPage = ({
  url,
  companyName,
  jobAccomplishments,
}: {
  url: string;
  companyName: string;
  jobAccomplishments: ReactNode;
}) => (
  <>
    <a href={url} target="_blank" rel="noreferrer">
      <HeaderText2 inline>{companyName}</HeaderText2>{" "}
      <AiOutlineLink className="inline" />
    </a>

    <br />
    <br />
    <ul className="max-w-3xl">{jobAccomplishments}</ul>
  </>
);

export default WorkPage;
