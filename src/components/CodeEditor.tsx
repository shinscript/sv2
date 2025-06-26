"use client";

import Editor from "@monaco-editor/react";
import useStore from "@/stores/stores";

const CodeEditor: React.FC = () => {
  const { codeSnippet, setCodeSnippet, setTemporaryErrorOutput } = useStore();
  return (
    <div className="col-start-1 row-start-1 row-end-3 w-full border-2 border-gray-300">
      <Editor
        defaultLanguage="javascript"
        defaultValue="// Write your code here..."
        theme="vs-dark"
        language="javascript"
        options={{
          minimap: { enabled: false },
          automaticLayout: true,
          scrollBeyondLastLine: false,
          colorDecorators: true,
        }}
        value={codeSnippet}
        onChange={(value) => setCodeSnippet(`${value}`)}
        onValidate={(markers) => {
          if (markers.length > 0 && markers[0].severity === 8) {
            const errorMessage = markers[0].message;
            setTemporaryErrorOutput(`Error: ${errorMessage}`); // Set error output if validation fails
          } else {
            setTemporaryErrorOutput(""); // Clear output if no errors
          }
        }}
      />
    </div>
  );
};

export default CodeEditor;
