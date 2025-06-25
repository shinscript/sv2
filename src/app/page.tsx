"use client";

import { useState } from "react";
import MyEditor from "./components/MyEditor";
import Visualization from "./components/Visualization";

export default function Home() {
  const [codeSnippet, setCodeSnippet] = useState<string>("");

  return (
    <>
      <MyEditor codeSnippet={codeSnippet} setCodeSnippet={setCodeSnippet} />
      <Visualization />
    </>
  );
}
