import {
  VariableDeclaration,
  FunctionDeclaration,
  Identifier,
  CallExpression,
  ExpressionStatement,
} from "acorn";

export interface IDispersedCodeSnippet {
  variableDeclaration: VariableDeclaration[];
  variableValue: string[];
  functionDeclaration: FunctionDeclaration[];
  identifiers: Identifier[];
  expressions: (ExpressionStatement | CallExpression)[];
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
  setDispersedCodeSnippet: (
    dispersedCodeSnippet: IDispersedCodeSnippet
  ) => void;
  run: () => void;
  clear: () => void;
}
