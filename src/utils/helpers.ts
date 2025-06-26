import { IDispersedCodeSnippet } from "@/utils/types";
// import  from "acorn";
import { parse, Program } from "acorn";
import * as walk from "acorn-walk";

export const parseCode = (code: string): Program => {
  return parse(code, {
    ecmaVersion: "latest",
    sourceType: "script",
    locations: true,
    ranges: true,
  });
};

export const parseAstToDispersedCodeSnippet = (ast: Program) => {
  const dispersedCodeSnippet: IDispersedCodeSnippet = {
    memoryLines: [],
    callstackLines: [],
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const traverseAST = (node: any, _state: any, type: string) => {
    switch (type) {
      case "VariableDeclaration": {
        if (node.declarations && node.declarations.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          node.declarations.forEach((declaration: any) => {
            if (
              declaration.init.type === "ArrowFunctionExpression" ||
              declaration.init.type === "FunctionExpression"
            ) {
              dispersedCodeSnippet.callstackLines.push(
                `Line: ${declaration.loc.start.line} Col: ${declaration.loc.end.column} :: Function ${declaration.id.name}`
              );
            } else if (declaration.init.type === "Literal") {
              dispersedCodeSnippet.memoryLines.push(
                `Line: ${declaration.loc.start.line} Col: ${declaration.loc.end.column} :: ${node.kind} ${declaration.id.name} = ${declaration.init.value}`
              );
            }
          });
        }
        break;
      }
      case "Function": {
        if (node.id) {
          dispersedCodeSnippet.callstackLines.push(
            `Line: ${node.loc.start.line} Col: ${node.loc.end.column} :: Function ${node.id.name}`
          );
        }
        break;
      }
      default: {
        return;
      }
    }
  };

  // Walk through the AST and extract relevant information
  walk.full(ast, traverseAST);

  return dispersedCodeSnippet;
};
