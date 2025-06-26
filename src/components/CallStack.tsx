"use client";

import React from "react";
import useStore from "@/stores/stores";

const CallStack = () => {
  const { dispersedCodeSnippet } = useStore();
  return (
    <div className="col-start-2 row-start-2 row-end-3 max-h-408px w-full border-2 border-gray-300 p-4">
      <h2 className="grid pb-2 font-bold justify-center">Call Stack</h2>
      <div
        className="overflow-auto h-50 border-2 rounded-2xl border-gray-300 p-4 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        {dispersedCodeSnippet.callstackLines.reverse().map((frame, index) => (
          <pre className="whitespace-pre-wrap break-words" key={index}>
            {frame}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default CallStack;
