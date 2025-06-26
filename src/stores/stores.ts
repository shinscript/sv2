import { create } from "zustand";
import { IStoreProps, IStoreActions, IDispersedCodeSnippet } from "../types";
import { parseAstToDispersedCodeSnippet, parseCode } from "@/utils/helpers";

const defaultDispersedCodeSnippet: IDispersedCodeSnippet = {
  memoryLines: [],
  callstackLines: [],
};

const useStore = create<IStoreProps & IStoreActions>((set) => ({
  // Initial state
  codeSnippet: "",
  output: "",
  dispersedCodeSnippet: {
    memoryLines: [],
    callstackLines: [],
  },
  temporaryErrorOutput: "",

  // Actions
  setCodeSnippet: (codeSnippet) => set({ codeSnippet }),
  setOutput: (output) => set({ output }),
  setTemporaryErrorOutput: (error) => set({ temporaryErrorOutput: error }),
  run: () => {
    const { codeSnippet, setOutput, temporaryErrorOutput } =
      useStore.getState();

    if (temporaryErrorOutput.length) {
      setOutput(temporaryErrorOutput);
      return;
    }

    const ast = parseCode(codeSnippet);

    if (!ast) {
      setOutput("Error parsing code.");
      return;
    }

    const fulfilled = parseAstToDispersedCodeSnippet(ast);
    const evaluatedCode = eval(codeSnippet);

    set({
      dispersedCodeSnippet: fulfilled,
      output: evaluatedCode,
    });
  },
  clear: () =>
    set({
      codeSnippet: "",
      output: "",
      dispersedCodeSnippet: defaultDispersedCodeSnippet,
    }),
}));

export default useStore;
