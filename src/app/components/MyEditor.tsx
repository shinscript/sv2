"use client";

import React, { useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";

interface MyEditorProps {
  codeSnippet: string;
  setCodeSnippet: (code: string) => void;
}

const MyEditor: React.FC<MyEditorProps> = ({ codeSnippet, setCodeSnippet }) => {
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
    <>
      <Editor
        defaultLanguage="javascript"
        defaultValue="// Write your code here..."
        height="100vh"
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
    </>
  );
};

export default MyEditor;
