import Editor from "./components/Editor";
import Visualization from "./components/Visualization";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Editor />
      <Visualization />
    </div>
  );
}
