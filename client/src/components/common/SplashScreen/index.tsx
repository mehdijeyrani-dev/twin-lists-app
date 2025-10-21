import React from "react";
import { DotLoader } from "react-spinners";

const SplashScreen = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 md:gap-20 w-screen h-screen select-none !overflow-hidden animate-opacity">
      <div className="splash-blur">
        <img
          src="logo-splash.svg"
          alt="logo splash"
          className="object-contain w-full h-full"
        />
      </div>
      <DotLoader className="rounded-full" color="#AD46FF" size={50} />
    </div>
  );
};

export default SplashScreen;
