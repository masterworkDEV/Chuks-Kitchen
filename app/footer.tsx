import { NextPage } from "next";
import Image from "next/image";

interface Props {}

// static image of logo
import logoImage from "@/public/images/logo.png";

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className="bg-dark px-14 max-lg:px-12 py-14 max-sm:hidden ">
      <section className=" flex justify-between items-center mb-5">
        <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 w-full">
          <div className="">
            <Image
              src={logoImage}
              alt="Chuk's Kitchen"
              priority
              className="mb-2"
            />

            <p className="text-white text-xl w-3/4">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>
          <div className="grid grid-cols-3 space-x-20 max-md:space-y-10  max-md:grid-cols-1">
            <ul>
              <h2 className="text-white text-xl font-semibold mb-2 ">
                Quick Links
              </h2>
              <li className="text-sm text-white   mb-2 hover:underline transition-all font-light">
                Home
              </li>
              <li className="text-sm text-white mb-2   hover:underline transition-all font-light ">
                Explore
              </li>
              <li className="text-sm text-white mb-2   hover:underline transition-all font-light">
                My Order
              </li>
              <li className="text-sm text-white mb-2   hover:underline transition-all  font-light">
                Account
              </li>
              <li className="text-sm text-white mb-2   hover:underline transition-all font-light ">
                Contact
              </li>
            </ul>
            <ul>
              <h2 className="text-white text-xl font-semibold mb-2  hover:underline transition-all ">
                Contact Us
              </h2>
              <li className="text-sm text-white mb-1   hover:underline transition-all font-light">
                +234 801 234 5678
              </li>
              <li className="text-sm text-white mb-1   hover:underline transition-all font-light ">
                hello@chukskitchen.com
              </li>
              <li className="text-sm text-white mb-1   hover:underline transition-all font-light">
                123 Taste Blvd,Lagos Nigeria{" "}
              </li>
            </ul>
            <ul>
              <li className="text-sm text-white mb-1    hover:underline transition-all font-light">
                Facebook
              </li>
              <li className="text-sm text-white mb-1   hover:underline transition-all font-light">
                Twitter
              </li>
              <li className="text-sm text-white mb-1   hover:underline transition-all font-light">
                Linkedin
              </li>
              <li className="text-sm text-white mb-1   hover:underline transition-all font-light">
                Instagram
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between relative">
        <p className="text-xs text-white font-light">
          © 2020 LTD Media. All rights reserved.
        </p>

        <a
          className=" bottom-5 right-5 rounded-full bg-blue-600 text-white w-12 h-12 flex justify-center items-center shadow-2xl"
          href="#home"
        >
          <svg
            className="w-2/4 h-2/4"
            viewBox="0 0 24 24"
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
                d="M12 5V19M12 5L6 11M12 5L18 11"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
