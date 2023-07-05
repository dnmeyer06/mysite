import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => (
  <nav className="flex justify-between p-4 lg:px-0">
    <span className="p-2">
      <strong>Daniel</strong> Meyer
    </span>
    <div className="flex">
      <ul className="flex">
        <li className="p-2">Home</li>
        <li className="p-2">About</li>
        <li className="p-2">Work</li>
      </ul>
      <ThemeSwitcher />
    </div>
  </nav>
);

export default NavBar;
