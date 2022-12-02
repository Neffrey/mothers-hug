// LIBRARIES
import React from "react";

// COMPONENTS

// FC
const Footer = () => {
  return (
    <div className="border-neutral from-accent to-accent-focus w-full border-t-4 border-solid bg-gradient-to-r p-4">
      <div className="flex justify-around">
        <div className="flex items-center">
          {/* <NeffreyLogo className="w-12 fill-base-300" /> */}
          <div className="p-2" />
          <h5 className="text-base-300 text-3xl font-bold lowercase">
            Mothers Hug Medicine
          </h5>
        </div>
        <div className="p-4">
          <h4 className="text-base-300 text-center text-lg font-bold lowercase">
            Copyright © {new Date().getFullYear()}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Footer;
