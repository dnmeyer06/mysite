import { ReactNode } from "react";
import { HeaderText, HeaderText2 } from "@/components/Header";
import { AiOutlineLink } from "react-icons/ai";

const WorkPage = ({
  companyName,
  jobAccomplishments,
  url,
  toolsUsed,
  startDate,
  endDate,
  summary,
}: {
  companyName: string;
  jobAccomplishments: ReactNode;
  startDate: Date;
  url?: string;
  toolsUsed?: string[];
  endDate?: Date;
  summary?: string;
}) => {
  const WorkHeader = () => <HeaderText inline>{companyName}</HeaderText>;

  const startDateString =
    startDate.getMonth() + 1 + "/" + startDate.getFullYear();

  const endDateString = endDate
    ? endDate.getMonth() + 1 + "/" + endDate.getFullYear()
    : "Current";

  return (
    <div className="max-w-3xl">
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <WorkHeader /> <AiOutlineLink className="inline" />
        </a>
      ) : (
        <WorkHeader />
      )}

      <div className="pb-6">
        <HeaderText2>
          {startDateString} - {endDateString}
        </HeaderText2>
      </div>

      {toolsUsed && (
        <div className="pb-6">
          <HeaderText2>
            <strong>Tools Used</strong> <span>{toolsUsed.join(", ")}</span>
          </HeaderText2>
        </div>
      )}
      {!!summary && (
        <div className="pb-6">
          <p>{summary}</p>
        </div>
      )}
      <ul className="pl-2.5">{jobAccomplishments}</ul>
    </div>
  );
};

export default WorkPage;
