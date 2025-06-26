"use client";

import { useEffect, useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";

const CodeEditor: React.FC = () => {
  const [codeSnippet, setCodeSnippet] = useState<string>("");
  const monaco = useMonaco();

  // Define a custom theme for the Monaco editor
  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("custom", {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#1f2937",
        },
      });
      monaco.editor.setTheme("custom");
    }
  }, [monaco]);

  return (
    <div className="row-span-3 w-full border-2 border-gray-300">
      <Editor
        defaultLanguage="javascript"
        defaultValue="// Write your code here..."
        theme="custom"
        language="javascript"
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          lineNumbers: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
        value={codeSnippet}
        onChange={(value) => setCodeSnippet(`${value}`)}
      />
    </div>
  );
};

export default CodeEditor;
