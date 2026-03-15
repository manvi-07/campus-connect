import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NodeProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}

const NetworkNode = ({ position, color, scale = 1, speed = 1 }: NodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[0.25 * scale, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
};

interface ConnectionLineProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}

const ConnectionLine = ({ start, end, color }: ConnectionLineProps) => {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2 + 0.3,
        (start[2] + end[2]) / 2
      ),
      new THREE.Vector3(...end)
    );
    return curve.getPoints(30);
  }, [start, end]);

  return (
    <mesh>
      <tubeGeometry args={[new THREE.CatmullRomCurve3(points), 30, 0.015, 8, false]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  );
};

const NetworkNodes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const nodes: { position: [number, number, number]; color: string; scale: number }[] = [
    { position: [0, 0, 0], color: '#b0ff2e', scale: 1.8 },
    { position: [2, 0.8, -0.5], color: '#a855f7', scale: 1.1 },
    { position: [-1.8, 0.3, 0.8], color: '#ff66b2', scale: 0.9 },
    { position: [0.8, -1.2, 0.6], color: '#00bfff', scale: 1 },
    { position: [-1.2, 1.2, -0.3], color: '#b0ff2e', scale: 0.8 },
    { position: [1.8, -0.3, -0.8], color: '#a855f7', scale: 0.7 },
  ];

  const connections: { start: [number, number, number]; end: [number, number, number]; color: string }[] = [
    { start: nodes[0].position, end: nodes[1].position, color: '#b0ff2e' },
    { start: nodes[0].position, end: nodes[2].position, color: '#ff66b2' },
    { start: nodes[0].position, end: nodes[3].position, color: '#00bfff' },
    { start: nodes[0].position, end: nodes[4].position, color: '#a855f7' },
    { start: nodes[1].position, end: nodes[5].position, color: '#a855f7' },
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <NetworkNode key={i} {...node} speed={0.4 + Math.random() * 0.4} />
      ))}
      {connections.map((conn, i) => (
        <ConnectionLine key={i} {...conn} />
      ))}
    </group>
  );
};

const NetworkScene = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#b0ff2e" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#a855f7" />
        <pointLight position={[0, 5, 5]} intensity={0.3} color="#ff66b2" />
        <NetworkNodes />
      </Canvas>
    </div>
  );
};

export default NetworkScene;