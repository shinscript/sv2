// create testing suite for Output component using jest and react testing library
// Ensure that the component renders correctly and displays the output.

import React from "react";
import { render, screen } from "@testing-library/react";
import useStore from "../../stores/stores";
import Output from "../Output";

jest.mock("../../stores/stores", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseStore = useStore as unknown as jest.Mock;

describe("Output Component", () => {
  beforeEach(() => {
    mockUseStore.mockReturnValue({
      output: "Test output",
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<Output />);
    expect(screen.getByText("Output")).toBeInTheDocument();
  });

  it("displays the output correctly", () => {
    render(<Output />);
    expect(screen.getByText("Test output")).toBeInTheDocument();
  });

  it("has the correct class names", () => {
    const { container } = render(<Output />);
    expect(container.firstChild).toHaveClass(
      "col-span-2 h-50 w-full border-2 border-gray-300 p-4"
    );
    expect(container.querySelector("pre")).toHaveClass(
      "whitespace-pre-wrap break-words"
    );
  });
});
