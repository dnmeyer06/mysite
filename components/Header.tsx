import { ReactNode } from "react";

const HeaderText = ({
  children,
  inline,
}: {
  children: ReactNode;
  inline?: boolean;
}) => {
  return (
    <>
      <h1 className={`${inline ? "inline" : ""} pb-6 pt-2 text-4xl`}>
        {children}
      </h1>
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
      <h2
        className={`${inline ? "inline" : ""} text-xl font-normal leading-10`}
      >
        {children}
      </h2>
    </>
  );
};

export { HeaderText, HeaderText2 };
