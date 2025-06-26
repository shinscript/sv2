//CallStack.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import CallStack from "../CallStack";
import useStore from "../../stores/stores";

jest.mock("../../stores/stores", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseStore = useStore as unknown as jest.Mock;

describe("CallStack Component", () => {
  beforeEach(() => {
    mockUseStore.mockReturnValue({
      dispersedCodeSnippet: {
        callstackLines: ["Function1", "Function2", "Function3"],
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<CallStack />);
    expect(screen.getByText("Call Stack")).toBeInTheDocument();
  });

  it("displays the call stack lines correctly", () => {
    render(<CallStack />);
    expect(screen.getByText("Function1")).toBeInTheDocument();
    expect(screen.getByText("Function2")).toBeInTheDocument();
    expect(screen.getByText("Function3")).toBeInTheDocument();
  });

  it("has the correct class names", () => {
    const { container } = render(<CallStack />);
    expect(container.firstChild).toHaveClass(
      "col-start-2 row-start-2 row-end-3 max-h-408px w-full border-2 border-gray-300 p-4"
    );
    expect(container.querySelector("pre")).toHaveClass(
      "whitespace-pre-wrap break-words"
    );
  });
});
