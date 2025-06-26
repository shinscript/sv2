"use client";

import Editor from "@monaco-editor/react";
import useStore from "@/stores/stores";

const CodeEditor: React.FC = () => {
  const { codeSnippet, setCodeSnippet, setOutput } = useStore();
  return (
    <div className="row-span-3 w-full border-2 border-gray-300">
      <Editor
        defaultLanguage="javascript"
        defaultValue="// Write your code here..."
        height="100%"
        theme="vs-dark"
        language="javascript"
        options={{
          minimap: { enabled: false },
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
        value={codeSnippet}
        onChange={(value) => setCodeSnippet(`${value}`)}
        onValidate={(markers) => {
          console.log("VALIDATE MARKERS:", markers);
          if (markers.length > 0 && markers[0].severity === 8) {
            const errorMessages = markers
              .map((marker) => marker.message)
              .join("\n");
            setOutput(`Errors:\n${errorMessages}`);
          }
        }}
      />
    </div>
  );
};

export default CodeEditor;
