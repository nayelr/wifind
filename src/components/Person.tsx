
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
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.5;
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
            <mesh position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.6]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Arms (2) */}
            <mesh position={[0, 0.7, 0]} rotation={[0, 0, Math.PI / 4]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, 0.7, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Legs (2) */}
            <mesh position={[0, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, 0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
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
            {/* Body */}
            <mesh position={[0, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Arms (2) */}
            <mesh position={[0, 0.4, 0]} rotation={[0, 0, -Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, 0.4, 0]} rotation={[0, 0, -Math.PI / 3]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Legs (2) - bent at knees */}
            <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0.15, 0.2, 0]} rotation={[0, 0, Math.PI / 3]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </>
        );
      case "lying":
        return (
          <>
            {/* Head */}
            <mesh position={[0, 0.1, 0]}>
              <sphereGeometry args={[0.1]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Body */}
            <mesh position={[0.3, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.6]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Arms (2) - spread out */}
            <mesh position={[0.3, 0.1, 0]} rotation={[Math.PI / 4, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0.3, 0.1, 0]} rotation={[-Math.PI / 4, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Legs (2) - straight */}
            <mesh position={[0.6, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0.6, 0.1, 0.1]} rotation={[0, 0, Math.PI / 2]}>
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
