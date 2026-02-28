import { NextPage } from "next";
import Image from "next/image";

interface Props {}

// static image of logo
import logoImage from "@/public/images/logo.png";

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className=" bg-dark px-14 max-lg:px-12 py-14 max-sm:hidden flex justify-between items-center ">
      <div className="flex space-x-10 w-full">
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
        <div className="grid grid-cols-3 space-x-20">
          <ul>
            <h2 className="text-white text-xl font-semibold mb-2 ">
              Quick Links
            </h2>
            <li className="text-sm text-white   mb-2 hover:underline transition-all ">
              Home
            </li>
            <li className="text-sm text-white mb-2   hover:underline transition-all ">
              Explore
            </li>
            <li className="text-sm text-white mb-2   hover:underline transition-all ">
              My Order
            </li>
            <li className="text-sm text-white mb-2   hover:underline transition-all ">
              Account
            </li>
            <li className="text-sm text-white mb-2   hover:underline transition-all ">
              Contact
            </li>
          </ul>
          <ul>
            <h2 className="text-white text-xl font-semibold mb-2  hover:underline transition-all ">
              Contact Us
            </h2>
            <li className="text-sm text-white mb-1   hover:underline transition-all ">
              +234 801 234 5678
            </li>
            <li className="text-sm text-white mb-1   hover:underline transition-all ">
              hello@chukskitchen.com
            </li>
            <li className="text-sm text-white mb-1   hover:underline transition-all ">
              123 Taste Blvd,Lagos Nigeria{" "}
            </li>
          </ul>
          <ul>
            <li className="text-sm text-white mb-1    hover:underline transition-all ">
              Facebook
            </li>
            <li className="text-sm text-white mb-1   hover:underline transition-all ">
              Twitter
            </li>
            <li className="text-sm text-white mb-1   hover:underline transition-all ">
              Linkedin
            </li>
            <li className="text-sm text-white mb-1   hover:underline transition-all ">
              Instagram
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
