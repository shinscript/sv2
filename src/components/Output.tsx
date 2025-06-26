"use client";

import React from "react";
import useStore from "@/stores/stores";

const Output = () => {
  const { output } = useStore();
  return (
    <div className="col-span-2 h-50 w-full border-2 border-gray-300 p-4">
      <h2 className="grid font-bold pb-2 justify-center">Output</h2>
      <div className="overflow-auto h-30 border-2 rounded-2xl border-gray-300 p-4">
        <pre className="whitespace-pre-wrap break-words">{output}</pre>
      </div>
    </div>
  );
};

export default Output;
