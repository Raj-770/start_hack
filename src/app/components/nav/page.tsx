import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo-black.png";
import financialStatistics from "/public/finance-statistics.png";
import digitalStatistics from "/public/digital-statistics.png";
import othersStatistics from "/public/other-statistics.png";
import {UserButton} from "@clerk/nextjs";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-6 bg-white shadow-md">
      <div className="flex items-center">
        <Link href="/" passHref>
          <div className="cursor-pointer">
            <Image src={logo} alt="Company Logo" width={120} height={100} />
          </div>
        </Link>
        <div className="flex flex-row mx-8 text-sm gap-5">
          <div className="flex flex-col justify-items-center">
            <p className="text-black text-center font-semibold">PROGRAM:</p>
            <p className="text-red-700 text-center font-semibold">
              ACCELERATOR
            </p>
          </div>
          <div className="flex flex-col justify-items-center">
            <p className="text-black text-center font-semibold">STAGE:</p>
            <p className="text-red-700 text-center font-semibold">SERIES A</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 relative">
        {/* Wrap the Image and span in a div */}
        <Link href="/" passHref>
          <div className="cursor-pointer group">
            <Image
              src={financialStatistics}
              alt="Financial Statistics"
              width={75}
              height={75}
              className="group-hover:hidden"
            />
            <span className="hidden group-hover:block text-black w-[75px] font-semibold text-center">
              Finance
            </span>
          </div>
        </Link>
        <Link href="/statistics/digital-statistics" passHref>
          <div className="cursor-pointer group">
            <Image
              src={digitalStatistics}
              alt="Digital Statistics"
              width={75}
              height={75}
              className="group-hover:hidden"
            />
            <span className="hidden group-hover:block text-black w-[75px] font-semibold text-center">
              Digital
            </span>
          </div>
        </Link>
        <Link href="/statistics/other-statistics" passHref>
          <div className="cursor-pointer group mt-1">
            <Image
              src={othersStatistics}
              alt="Other Statistics"
              width={85}
              height={75}
              className="group-hover:hidden"
            />
            <span className="hidden group-hover:block text-black w-[85px] font-semibold text-center">
              Other
            </span>
          </div>
        </Link>
        <div className="flex items-center">
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
