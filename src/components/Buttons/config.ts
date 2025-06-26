type ButtonConfig = Record<string, IButton>;

interface IButton {
  label: string;
  className: string;
}

export const ButtonConfig: ButtonConfig = {
  run: {
    label: "Run",
    className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
  },
  clear: {
    label: "Clear",
    className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",
  },
};
