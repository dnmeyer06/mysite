"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AiOutlineMenu
        className="cursor-pointer text-3xl"
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
      <div
        className={`absolute right-0 top-0 z-10 flex  h-screen flex-col gap-3 border-l bg-slate-300 text-3xl transition-all duration-300 ease-out dark:bg-slate-950 ${
          isOpen ? "w-8/12 border-solid border-l-stone-700 p-2" : "w-0 p-0"
        }`}
      >
        {isOpen && (
          <>
            <AiOutlineClose
              className="self-end"
              onClick={() => setIsOpen(false)}
              size="3rem"
            />
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <hr />
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
            <hr />
            <Link href="/work" onClick={() => setIsOpen(false)}>
              Work
            </Link>
            <div className="absolute bottom-5 right-5">
              <ThemeSwitcher />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MobileNavigation;
