import { create } from "zustand";
import { IStoreProps, IStoreActions, IDispersedCodeSnippet } from "../types";
import { parseCode } from "@/utils/helpers";

const defaultDispersedCodeSnippet: IDispersedCodeSnippet = {
  variableDeclaration: [],
  variableValue: [],
  functionDeclaration: [],
  identifiers: [],
  expressions: [],
};

const useStore = create<IStoreProps & IStoreActions>((set) => ({
  // Initial state
  codeSnippet: "",
  output: "",
  dispersedCodeSnippet: {
    variableDeclaration: [],
    variableValue: [],
    functionDeclaration: [],
    identifiers: [],
    expressions: [],
  },
  temporaryErrorOutput: "",

  // Actions
  setCodeSnippet: (codeSnippet) => set({ codeSnippet }),
  setOutput: (output) => set({ output }),
  setDispersedCodeSnippet: (dispersedCodeSnippet) =>
    set({ dispersedCodeSnippet }),
  run: () => {
    const {
      codeSnippet,
      setOutput,
      setDispersedCodeSnippet,
      temporaryErrorOutput,
    } = useStore.getState();

    if (temporaryErrorOutput.length) {
      setOutput(temporaryErrorOutput);
      return;
    }

    const ast = parseCode(codeSnippet);

    if (!ast) {
      setOutput("Error parsing code.");
      return;
    }

    console.log("AST:", ast);
  },
  clear: () =>
    set({
      codeSnippet: "",
      output: "",
      dispersedCodeSnippet: defaultDispersedCodeSnippet,
    }),
}));

export default useStore;
