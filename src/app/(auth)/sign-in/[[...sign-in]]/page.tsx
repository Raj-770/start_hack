import React from "react";
import {SignIn} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
import polygon from "/public/polygon.png";
import logo from "/public/logo-white.svg";
import Image from "next/image";
const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center mt-10">
      <div className="flex flex-col">
        <div>
          <Image src={logo} alt="" width={150} />
        </div>
        <div className="hidden md:block z-0 md:mt-10">
          {" "}
          <Image src={polygon} alt="" width={400} />
        </div>
      </div>
      <div className="col-span-1 pt-[20vh] md:pt-0 z-10">
        <SignIn appearance={{baseTheme: dark}} />
      </div>
    </div>
  );
};

export default Page;
