
import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

interface PersonProps {
  position: [number, number, number];
  color: string;
  status: string;
}

export const Person = ({ position, color, status }: PersonProps) => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current && status === "walking") {
      // Subtle bobbing movement for walking animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05 + 0.5;
    }
  });

  const renderStickFigure = () => {
    switch (status) {
      case "walking":
        return (
          <>
            {/* Head */}
            <mesh position={[0, 0.9, 0]}>
              <sphereGeometry args={[0.1]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Body */}
            <mesh position={[0, 0.6, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.5]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Left Arm */}
            <mesh position={[0, 0.75, 0]} rotation={[0, 0, Math.PI / 4]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Right Arm */}
            <mesh position={[0, 0.75, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Left Leg */}
            <mesh position={[-0.05, 0.35, 0]} rotation={[0, 0, Math.PI / 6]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Right Leg */}
            <mesh position={[0.05, 0.35, 0]} rotation={[0, 0, -Math.PI / 6]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </>
        );
      case "crouching":
        return (
          <>
            {/* Head */}
            <mesh position={[0, 0.5, 0]}>
              <sphereGeometry args={[0.1]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Body - slightly bent forward */}
            <mesh position={[0, 0.35, 0]} rotation={[0, 0, Math.PI / 8]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Left Arm - extended forward */}
            <mesh position={[0, 0.4, 0]} rotation={[0, 0, -Math.PI / 3]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Right Arm - extended downward */}
            <mesh position={[0, 0.4, 0]} rotation={[0, 0, -Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Left Leg - bent at knee */}
            <mesh position={[-0.05, 0.2, 0]} rotation={[0, 0, Math.PI / 2.5]}>
              <cylinderGeometry args={[0.02, 0.02, 0.25]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Right Leg - bent at knee */}
            <mesh position={[0.05, 0.2, 0]} rotation={[0, 0, -Math.PI / 2.5]}>
              <cylinderGeometry args={[0.02, 0.02, 0.25]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </>
        );
      case "lying":
        return (
          <>
            {/* Head */}
            <mesh position={[-0.3, 0.1, 0]}>
              <sphereGeometry args={[0.1]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Body - horizontal */}
            <mesh position={[0, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.5]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Left Arm - above head */}
            <mesh position={[-0.2, 0.15, 0]} rotation={[0, 0, Math.PI / 4]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Right Arm - along body */}
            <mesh position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Left Leg - straight */}
            <mesh position={[0.2, 0.1, -0.05]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Right Leg - straight */}
            <mesh position={[0.2, 0.1, 0.05]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <group ref={groupRef} position={position}>
      {renderStickFigure()}
    </group>
  );
};
