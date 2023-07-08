import { ReactNode } from "react";

const HeaderText = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1 className="pb-6 pt-2 text-4xl">{children}</h1>
    </>
  );
};

const HeaderText2 = ({
  children,
  inline,
}: {
  children: ReactNode;
  inline?: boolean;
}) => {
  return (
    <>
      <h2 className={`${inline ? "inline" : ""} text-xl`}>{children}</h2>
    </>
  );
};

export { HeaderText, HeaderText2 };
