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
      <div className="flex justify-center items-center gap-20  max-lg:gap-20">
        <a href="/">
          <Image
            src={logoImage}
            alt="Chuk's Kitchen"
            className="max-sm:h-6 "
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
                    display: "inline-block",
                    marginInline: "40px",
                    fontSize: "15px",
                    fontWeight: "thick",
                  }}
                  className={
                    isActive
                      ? "    text-orange  font-semibold"
                      : `   font-semibold  text-text  text-center    `
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
          className="bg-orange text-white text-sm font-semibold  px-12 py-3 rounded-lg"
        >
          Login
        </Link>
      </div>
      {/* For mobile menu */}

      <div className="hidden max-md:block">
        {showMenu ? (
          <button onClick={toggleMenu} className="">
            <svg
              className="w-8 h-8"
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M2 12.32H22"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M2 18.32H22"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M2 6.32001H22"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        ) : (
          <button onClick={toggleMenu} className="">
            <svg
              className="w-8 h-8"
              fill="#000000"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>times</title>{" "}
                <path d="M17.062 16l9.37-9.37c0.136-0.136 0.219-0.323 0.219-0.53 0-0.415-0.336-0.751-0.751-0.751-0.208 0-0.395 0.084-0.531 0.22v0l-9.369 9.369-9.37-9.369c-0.135-0.131-0.319-0.212-0.522-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.387 0.212 0.522l9.368 9.369-9.369 9.369c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.394-0.084 0.53-0.219v0l9.37-9.37 9.369 9.37c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0z"></path>{" "}
              </g>
            </svg>
          </button>
        )}
      </div>

      <div
        className={
          showMenu
            ? `hidden`
            : `hidden max-md:block absolute top-16 right-0 left-0   w-full bg-white z-20 shadow-b`
        }
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => {
            const path = usePathname();
            const isActive = path === link.href;

            return (
              <Link
                href={link.href}
                onClick={toggleMenu}
                className={`  text-sm  font-semibold text-center my-2 p-2 hover:bg-[#ff781877] transition-all duration-100   ${
                  isActive && " bg-[#ff781877] text-orange"
                }`}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
