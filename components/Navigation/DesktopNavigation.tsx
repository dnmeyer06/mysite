import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

const DesktopNavigation = () => (
  <ul className="flex">
    <li className="p-2 hover:underline">
      <Link href="/">Home</Link>
    </li>
    <li className="p-2">|</li>
    <li className="p-2 hover:underline">
      <Link href="/about">About</Link>
    </li>
    <li className="p-2">|</li>
    <li className="p-2 hover:underline">
      <Link href="/work">Professional Work</Link>
    </li>
    <li className="p-2">|</li>
    <li className="p-2 pr-0">
      <ThemeSwitcher />
    </li>
  </ul>
);

export default DesktopNavigation;
