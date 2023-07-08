import { ReactNode } from "react";

// Component Imports
import { HeaderText } from "../components/Header";
import ContactIcons from "@/components/ContactIcons";

const PageHeader = ({ title }: { title: ReactNode }) => (
  <>
    <div className="flex flex-col justify-between lg:flex-row">
      <HeaderText>{title}</HeaderText>
      <ContactIcons />
    </div>

    <hr className="p-6" />
  </>
);

export default PageHeader;
