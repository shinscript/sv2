import * as parser from "acorn";
import { Program } from "acorn";

export const parseCode = (code: string) => {
  return parser.parse(code, {
    ecmaVersion: "latest",
    sourceType: "script",
    locations: true,
    ranges: true,
  });
};

export const parseAstToDispersedCodeSnippet = (ast: Program) => {
  const dispersedCodeSnippet = {
    variableDeclaration: [],
    variableValue: [],
    functionDeclaration: [],
    expressions: [],
  };

  // Traverse the AST and populate the dispersedCodeSnippet

  return dispersedCodeSnippet;
};
