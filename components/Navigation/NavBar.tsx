import Link from "next/link";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => (
  <nav className="flex justify-between py-4 lg:px-0">
    <span className="p-2 pl-0">
      <Link href="/">
        <strong>Daniel</strong> Meyer
      </Link>
    </span>
    <div className="hidden md:block">
      <DesktopNavigation />
    </div>
    <div className="block md:hidden">
      <MobileNavigation />
    </div>
  </nav>
);

export default NavBar;
