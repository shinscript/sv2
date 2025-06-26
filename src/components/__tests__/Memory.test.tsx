//Write testing suite for Memory component using jest and react testing library
// Ensure that the component renders correctly and displays the memory.
import React from "react";
import { render, screen } from "@testing-library/react";
import useStore from "../../stores/stores";
import Memory from "../Memory";

jest.mock("../../stores/stores", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseStore = useStore as unknown as jest.Mock;

describe("Memory Component", () => {
  beforeEach(() => {
    mockUseStore.mockReturnValue({
      dispersedCodeSnippet: {
        memoryLines: ["Line 1", "Line 2", "Line 3"],
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<Memory />);
    expect(screen.getByText("Memory")).toBeInTheDocument();
  });

  it("displays the memory lines correctly", () => {
    render(<Memory />);
    expect(screen.getByText("Line 1")).toBeInTheDocument();
    expect(screen.getByText("Line 2")).toBeInTheDocument();
    expect(screen.getByText("Line 3")).toBeInTheDocument();
  });

  it("has the correct class names", () => {
    const { container } = render(<Memory />);
    expect(container.firstChild).toHaveClass(
      "col-start-2 row-start-1 row-end-2 h-full w-full border-2 border-gray-300 p-4"
    );
    expect(container.querySelector("pre")).toHaveClass(
      "whitespace-pre-wrap break-words"
    );
  });
});
