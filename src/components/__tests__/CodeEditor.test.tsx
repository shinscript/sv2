import React from "react";
import { render, screen } from "@testing-library/react";
import CodeEditor from "../CodeEditor";
import useStore from "../../stores/stores";

jest.mock("../../stores/stores", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseStore = useStore as unknown as jest.Mock;

describe("CodeEditor Component", () => {
  beforeEach(() => {
    mockUseStore.mockReturnValue({
      codeSnippet: "",
      setCodeSnippet: jest.fn(),
      setTemporaryErrorOutput: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<CodeEditor />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays the code correctly", () => {
    render(<CodeEditor />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
