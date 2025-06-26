"use client";

import React from "react";
import useStore from "@/stores/stores";

const Output = () => {
  const { output } = useStore();
  return <div className="col-span-2 row-span-2">{output}</div>;
};

export default Output;
