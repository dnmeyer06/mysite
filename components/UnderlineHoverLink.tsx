import Link from "next/link";
import { ReactNode } from "react";

const UnderlineHoverLink = ({
  backgroundColor,
  link,
  children,
}: {
  backgroundColor: string;
  link: string;
  children: ReactNode;
}) => (
  <div className="group relative w-max py-4 ">
    <Link href={link} className="z-10 flex align-middle tracking-wide">
      {children}
    </Link>
    <div
      className={`absolute bottom-1.5 -z-10 h-px w-full ${backgroundColor} rounded duration-300 ease-out group-hover:h-8 group-hover:-translate-y-1 group-hover:p-5 group-hover:px-8 motion-reduce:transition-none motion-reduce:hover:transform-none`}
    ></div>
  </div>
);

export default UnderlineHoverLink;
