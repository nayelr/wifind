
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

interface PersonProps {
  position: [number, number, number];
  color: string;
  status: string;
}

export const Person = ({ position, color, status }: PersonProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && status === "walking") {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[position[0], status === "lying" ? 0.1 : 0.5, position[2]]}>
      <sphereGeometry args={[0.2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
