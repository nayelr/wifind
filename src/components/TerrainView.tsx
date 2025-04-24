
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Person } from "./Person";
import { useViewSettings } from "../context/ViewSettings";

const people: { position: [number, number, number]; color: string; status: string; }[] = [
  { position: [1.43, 0, 0.785], color: "cyan", status: "standing" },
  { position: [2.67, 0, 1.223], color: "lime", status: "sitting" },
  { position: [1.98, 0, 2.157], color: "yellow", status: "lying" },
];

export const TerrainView = () => {
  const { backgroundColor, scaleFactor, renderingQuality } = useViewSettings();

  return (
    <Canvas 
      camera={{ position: [5 * scaleFactor, 5 * scaleFactor, 5 * scaleFactor] }}
      style={{ background: backgroundColor === 'dark' ? '#1a1a1a' : '#ffffff' }}
    >
      <ambientLight intensity={backgroundColor === 'dark' ? 0.5 : 0.8} />
      <pointLight position={[10, 10, 10]} intensity={backgroundColor === 'dark' ? 1 : 1.2} />
      
      {/* Grid */}
      <gridHelper 
        args={[20, 20, 
          backgroundColor === 'dark' ? "#666666" : "#999999", 
          backgroundColor === 'dark' ? "#222222" : "#cccccc"
        ]} 
      />
      
      {/* People */}
      {people.map((person, index) => (
        <Person 
          key={index} 
          {...person} 
          quality={renderingQuality}
        />
      ))}
      
      <OrbitControls 
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};
