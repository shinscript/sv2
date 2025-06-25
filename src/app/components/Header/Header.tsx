"use client";

import React from "react";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl pl-10">Script Vision</h1>
      </div>
      <div>
        <Button label="Run" onClick={() => console.log("Run button clicked")} />
        <Button
          label="Clear"
          onClick={() => console.log("Clear button clicked")}
        />
      </div>
    </header>
  );
};

export default Header;
