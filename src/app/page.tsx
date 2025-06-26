import CodeEditor from "@/components/CodeEditor";
import CallStack from "@/components/CallStack";
import Memory from "@/components/Memory";
import Output from "@/components/Output";
import ButtonWrapper from "@/components/Buttons/ButtonWrapper";

export default function Home() {
  return (
    <div className="grid p-4 max-w-screen overflow-x-hidden">
      <h1 className="grid justify-center text-7xl p-4">Script Vision</h1>
      <h2 className="grid justify-center text-2xl p-4">
        Javascript Execution Context Visualizer
      </h2>
      <div className="grid justify-center p-4">
        <ButtonWrapper />
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 p-10 mt- mr-100 ml-100 border-2 border-gray-300 rounded-lg justify-items-center">
        <CodeEditor />
        <Memory />
        <CallStack />
        <Output />
      </div>
    </div>
  );
}
