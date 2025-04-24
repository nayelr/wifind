
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Person } from "./Person";

const people = [
  { position: [1.43, 0, 0.785], color: "cyan", status: "walking" },
  { position: [2.67, 0, 1.223], color: "lime", status: "crouching" },
  { position: [1.98, 0, 2.157], color: "yellow", status: "lying" },
];

export const TerrainView = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Grid */}
      <gridHelper args={[20, 20, "#666666", "#222222"]} />
      
      {/* People */}
      {people.map((person, index) => (
        <Person key={index} {...person} />
      ))}
      
      {/* Controls */}
      <OrbitControls 
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};
