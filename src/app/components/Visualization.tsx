"use client";

import React from "react";
import Memory from "./Visualization/Memory";
import Callstack from "./Visualization/Callstack";

const Visualization = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-600 text-white">
      <Memory />
      <Callstack />
    </div>
  );
};

export default Visualization;
