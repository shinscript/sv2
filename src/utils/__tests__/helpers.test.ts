import { parseCode, parseAstToDispersedCodeSnippet } from "../helpers";

describe("parseCode", () => {
  it("should parse a simple JavaScript code snippet", () => {
    const code = "const x = 10;";
    const ast = parseCode(code);
    expect(ast).toBeDefined();
    expect(ast.type).toBe("Program");
    expect(ast.body.length).toBe(1);
    expect(ast.body[0].type).toBe("VariableDeclaration");
  });

  it("should parse a function declaration", () => {
    const code = "function test() {}";
    const ast = parseCode(code);
    expect(ast.body.length).toBe(1);
    expect(ast.body[0].type).toBe("FunctionDeclaration");
  });

  it("should handle arrow functions", () => {
    const code = "const add = (a, b) => a + b;";
    const ast = parseCode(code);
    expect(ast.body.length).toBe(1);
    expect(ast.body[0].type).toBe("VariableDeclaration");
  });
});

describe("parseAstToDispersedCodeSnippet", () => {
  it("should extract memory lines from variable declarations", () => {
    const code = "const x = 10; const y = 'hello';";
    const ast = parseCode(code);
    const dispersedCodeSnippet = parseAstToDispersedCodeSnippet(ast);
    expect(dispersedCodeSnippet.memoryLines.length).toBe(2);
    expect(dispersedCodeSnippet.memoryLines[0]).toContain("x = 10");
    expect(dispersedCodeSnippet.memoryLines[1]).toContain("y = hello");
  });

  it("should extract callstack lines from function declarations", () => {
    const code = "function test() {} const add = (a, b) => a + b;";
    const ast = parseCode(code);
    const dispersedCodeSnippet = parseAstToDispersedCodeSnippet(ast);
    expect(dispersedCodeSnippet.callstackLines.length).toBe(2);
    expect(dispersedCodeSnippet.callstackLines[0]).toContain("Function test");
    expect(dispersedCodeSnippet.callstackLines[1]).toContain("Function add");
  });
});
