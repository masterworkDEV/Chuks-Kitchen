"use client";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// static image of logo
import logoImage from "@/public/images/logo.png";

interface Props {}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "My Order", href: "/my-order" },
  { name: "Account", href: "/account" },
];

const Navbar: NextPage<Props> = ({}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <header className="flex bg-white px-14 max-lg:px-10 max-md:px-7 max-sm:px-5 py-5 max-sm:py-2.5 justify-between items-center shadow fixed right-0 left-0 top-0 z-30">
      <div className="flex justify-center items-center gap-20  max-xl:gap-10">
        <a href="/">
          <Image
            src={logoImage}
            alt="Chuk's Kitchen"
            className="max-lg:h-6 w-full"
            priority
          />
        </a>

        {/* nav links */}
        <div className="max-md:hidden">
          <nav>
            {navLinks.map((link) => {
              const path = usePathname();

              const isActive = path === link.href;

              return (
                <Link
                  href={link.href}
                  style={{
                    fontSize: "15px",
                    fontWeight: "thick",
                  }}
                  className={
                    isActive
                      ? "    text-orange  font-semibold mx-10 max-lg:mx-5"
                      : `   font-semibold  text-text  text-center   mx-10 max-lg:mx-5 `
                  }
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className=" flex gap-6 max-md:hidden">
        <Link
          href="/login"
          className="bg-orange text-white text-sm font-semibold  px-12 py-3   max-lg:px-10 rounded-lg"
        >
          Login
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {showMenu ? (
            /* "X" Icon */
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <div
        className={`
    md:hidden fixed left-0 w-full bg-white shadow-xl z-40 transition-all duration-300 ease-in-out
    ${
      showMenu
        ? "top-[70px] opacity-100 translate-y-0"
        : "top-[-100%] opacity-0 -translate-y-10 pointer-events-none"
    }
  `}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => {
            const path = usePathname();
            const isActive = path === link.href; // matching path

            return (
              <Link
                onClick={toggleMenu}
                key={link.name}
                href={link.href}
                className={
                  isActive ? "bg-orange/10 text-orange p-2" : "text-text p-2"
                }
              >
                {link.name}
              </Link>
            );
          })}

          <hr className="border-gray-100" />

          <Link
            href="/login"
            onClick={() => setShowMenu(false)}
            className="bg-orange text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-orange/20"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
