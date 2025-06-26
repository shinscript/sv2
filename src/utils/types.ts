export interface IDispersedCodeSnippet {
  memoryLines: string[];
  callstackLines: string[];
}

export interface IStoreProps {
  codeSnippet: string;
  output: string;
  dispersedCodeSnippet: IDispersedCodeSnippet;
  temporaryErrorOutput: string;
}

export interface IStoreActions {
  setCodeSnippet: (codeSnippet: string) => void;
  setOutput: (output: string) => void;
  setTemporaryErrorOutput: (error: string) => void;
  run: () => void;
  clear: () => void;
}
