import { ReactFlow, useNodesState, type Node } from "@xyflow/react";
 
import "@xyflow/react/dist/style.css";
import { NumNode } from "./components/nodes/num-node";


 
const nodeTypes = {
  num: NumNode,
};
 
const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { value: 42 },
    type: "num",
  },
];
 
function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
 
  return (
    <div className="h-screen w-screen p-8 bg-gray-50 rounded-xl">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        fitView
      />
    </div>
  );
}
 
export default function App() {
  return <Flow />;
}