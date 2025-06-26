"use client";

import React from "react";
import Buttons from "./Buttons";
import { ButtonConfig } from "./config";
import useStore from "@/stores/stores";

const ButtonWrapper = () => {
  const { run, clear } = useStore();

  return (
    <div className="grid grid-cols-2">
      <Buttons {...ButtonConfig.run} onClick={run} />
      <Buttons {...ButtonConfig.clear} onClick={clear} />
    </div>
  );
};

export default ButtonWrapper;
