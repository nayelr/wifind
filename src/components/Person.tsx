
import { useRef } from "react";
import { Group } from "three";

interface PersonProps {
  position: [number, number, number];
  color: string;
  status: string;
  quality?: 'high' | 'medium' | 'low';
}

export const Person = ({ position, color, status, quality = 'high' }: PersonProps) => {
  const groupRef = useRef<Group>(null);
  
  // Adjust segment count based on quality
  const segments = quality === 'high' ? 32 : quality === 'medium' ? 16 : 8;

  const renderStickFigure = () => {
    switch (status) {
      case "standing":
        return (
          <>
            {/* Head */}
            <mesh position={[0, 0.9, 0]}>
              <sphereGeometry args={[0.1, segments, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Body */}
            <mesh position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Arms */}
            <mesh position={[0, 0.7, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.6, segments]} />
              <meshStandardMaterial color={color} />
              <mesh rotation={[0, 0, Math.PI / 2]} />
            </mesh>
            
            {/* Legs */}
            <mesh position={[0.1, 0.4, 0]} rotation={[0, 0, Math.PI / 12]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[-0.1, 0.4, 0]} rotation={[0, 0, -Math.PI / 12]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </>
        );
      case "sitting":
        return (
          <>
            {/* Head */}
            <mesh position={[0, 0.6, 0]}>
              <sphereGeometry args={[0.1, segments, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Body */}
            <mesh position={[0, 0.4, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Arms */}
            <mesh position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.6, segments]} />
              <meshStandardMaterial color={color} />
              <mesh rotation={[0, 0, Math.PI / 2]} />
            </mesh>
            
            {/* Legs */}
            <mesh position={[0.1, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[-0.1, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </>
        );
      case "lying":
        return (
          <>
            {/* Head */}
            <mesh position={[-0.4, 0.1, 0]}>
              <sphereGeometry args={[0.1, segments, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Body */}
            <mesh position={[0, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Arms */}
            <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.6, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            
            {/* Legs */}
            <mesh position={[0.4, 0.1, 0.1]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, segments]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0.4, 0.1, -0.1]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, segments]} />
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
