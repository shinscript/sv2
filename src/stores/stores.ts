import { create } from "zustand";
import { IStoreProps, IStoreActions, IDispersedCodeSnippet } from "../types";
import * as parser from "acorn";

const { parse } = parser.Parser;

const defaultDispersedCodeSnippet: IDispersedCodeSnippet = {
  variableDeclaration: [],
  variableValue: [],
  functionDeclaration: [],
  identifiers: [],
  expressions: [],
};

const useStore = create<IStoreProps & IStoreActions>((set) => ({
  codeSnippet: "",
  output: "",
  dispersedCodeSnippet: {
    variableDeclaration: [],
    variableValue: [],
    functionDeclaration: [],
    identifiers: [],
    expressions: [],
  },
  setCodeSnippet: (codeSnippet) => set({ codeSnippet }),
  setOutput: (output) => set({ output }),
  setDispersedCodeSnippet: (dispersedCodeSnippet) =>
    set({ dispersedCodeSnippet }),
  run: async () => {
    const { codeSnippet, setOutput } = useStore.getState();

    if (!codeSnippet) {
      setOutput("No code snippet provided");
      return;
    }

    try {
      const ast = await parse(codeSnippet, {
        ecmaVersion: "latest",
        sourceType: "module",
        locations: true,
        ranges: true,
      });

      console.log("AST:", ast);
    } catch (error) {
      // @eslint-disable-next-line no-error
      setOutput(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  },
  clear: () =>
    set({
      codeSnippet: "",
      output: "",
      dispersedCodeSnippet: defaultDispersedCodeSnippet,
    }),
}));

export default useStore;
