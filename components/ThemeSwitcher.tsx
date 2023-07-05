"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMonitor, FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="group">
      <button className="rounded-lg border-2 border-solid border-gray-300 p-2 capitalize">
        {theme}
      </button>
      <div className="p4 absolute hidden	rounded-lg border-2 border-solid border-gray-300 p-4 group-hover:block">
        <div>
          {resolvedTheme === "light" ? (
            <button className="py-2" onClick={() => setTheme("dark")}>
              <FiMoon className="inline" /> Dark Mode
            </button>
          ) : (
            <button className="py-2" onClick={() => setTheme("light")}>
              <FiSun className="inline" /> Light Mode
            </button>
          )}
        </div>
        <button className="py-2" onClick={() => setTheme("system")}>
          <FiMonitor className="inline" /> System
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
